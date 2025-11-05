"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight, Home, BookOpen, Volume2, VolumeX } from "lucide-react"
import Link from "next/link"

interface Chapter {
  title: string
  content: string[]
  background: string
  nextChapter?: number
  previousChapter?: number
}

interface ChapterReaderProps {
  chapter: Chapter
  chapterId: number
}

export function ChapterReader({ chapter, chapterId }: ChapterReaderProps) {
  const [currentParagraph, setCurrentParagraph] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    const progress = ((currentParagraph + 1) / chapter.content.length) * 100
    setReadingProgress(progress)
  }, [currentParagraph, chapter.content.length])

  useEffect(() => {
    if (isAutoPlay && currentParagraph < chapter.content.length - 1) {
      const timer = setTimeout(() => {
        setCurrentParagraph((prev) => prev + 1)
      }, 8000) // 8 seconds per paragraph
      return () => clearTimeout(timer)
    }
  }, [isAutoPlay, currentParagraph, chapter.content.length])

  const nextParagraph = () => {
    if (currentParagraph < chapter.content.length - 1) {
      setCurrentParagraph((prev) => prev + 1)
    }
  }

  const previousParagraph = () => {
    if (currentParagraph > 0) {
      setCurrentParagraph((prev) => prev - 1)
    }
  }

  const getChapterImage = (chapterId: number) => {
    const chapterImages = {
      1: "/chapter1-dream.jpg",
      2: "/chapter2-challenge.jpg",
      3: "/chapter3-team.jpg",
      4: "/chapter4-project.jpg",
      5: "/chapter5-presentation.jpg",
    }
    return chapterImages[chapterId as keyof typeof chapterImages] || "/hero-background.jpg"
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${getChapterImage(chapterId)}')`,
          filter: "brightness(0.3)",
        }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="bg-black/50 backdrop-blur-sm border-b border-white/20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link href="/">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                    <Home className="w-4 h-4 mr-2" />
                    Home
                  </Button>
                </Link>
                <div className="text-white">
                  <h1 className="text-xl font-bold">
                    Chapter {chapterId}: {chapter.title}
                  </h1>
                  <p className="text-sm text-slate-300">
                    Paragraph {currentParagraph + 1} of {chapter.content.length}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  className="text-white hover:bg-white/20"
                >
                  {isAutoPlay ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </Button>
                <div className="w-32">
                  <Progress value={readingProgress} className="h-2" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center p-4">
          <Card className="max-w-4xl w-full bg-black/70 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <BookOpen className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{chapter.title}</h2>
                <div className="mb-6">
                  <img
                    src={getChapterImage(chapterId) || "/placeholder.svg"}
                    alt={`Chapter ${chapterId}: ${chapter.title}`}
                    className="w-full max-w-md mx-auto rounded-lg shadow-lg border border-white/20"
                  />
                </div>
              </div>

              <div className="story-text text-center max-w-3xl mx-auto">
                <p className="text-lg md:text-xl leading-relaxed text-slate-100 animate-in fade-in duration-1000">
                  {chapter.content[currentParagraph]}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-12">
                <Button
                  variant="outline"
                  onClick={previousParagraph}
                  disabled={currentParagraph === 0}
                  className="border-white/30 text-white hover:bg-white/20 bg-transparent"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                <div className="flex gap-2">
                  {chapter.content.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentParagraph(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentParagraph ? "bg-primary scale-125" : "bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  onClick={nextParagraph}
                  disabled={currentParagraph === chapter.content.length - 1}
                  className="border-white/30 text-white hover:bg-white/20 bg-transparent"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chapter Navigation */}
        <div className="bg-black/50 backdrop-blur-sm border-t border-white/20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                {chapter.previousChapter && (
                  <Link href={`/chapter/${chapter.previousChapter}`}>
                    <Button variant="ghost" className="text-white hover:bg-white/20">
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      Previous Chapter
                    </Button>
                  </Link>
                )}
              </div>

              <Link href="/">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/20 bg-transparent">
                  <BookOpen className="w-4 h-4 mr-2" />
                  All Chapters
                </Button>
              </Link>

              <div>
                {chapter.nextChapter && (
                  <Link href={`/chapter/${chapter.nextChapter}`}>
                    <Button variant="ghost" className="text-white hover:bg-white/20">
                      Next Chapter
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
