"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const chapters = [
  {
    id: 1,
    title: "The Dream",
    description: "Riya Magdum, a 16-year-old from a well-to-do family in Belagavi, discovers her passion for coding.",
    duration: "5 min read",
  },
  {
    id: 2,
    title: "The Challenge",
    description: "Selected for a national coding competition, Riya decides to form an unconventional team.",
    duration: "6 min read",
  },
  {
    id: 3,
    title: "The Team",
    description: "Riya meets her teammates from a government school and learns about different perspectives.",
    duration: "6 min read",
  },
  {
    id: 4,
    title: "The Project",
    description: "Working together, the team builds 'Seekho' while bridging their different worlds.",
    duration: "6 min read",
  },
  {
    id: 5,
    title: "The Presentation",
    description: "At the national championship, Riya's team presents their project and learns what truly matters.",
    duration: "7 min read",
  },
]

export function StoryHome() {
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('/dramatic-lighthouse-on-rocky-coast-at-sunset-with-.jpg')`,
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Riya's Journey</h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-3xl mx-auto text-pretty">
              An inspiring story of privilege, responsibility, and friendship. Follow Riya Magdum, a 16-year-old high school student from Belagavi, as she learns what it truly means to make a difference.
            </p>
          </div>
        </div>
      </div>

      {/* Chapter Selection */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Chapter</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Follow Riya Magdum's journey from a privileged life in Belagavi to discovering the power of collaboration and empathy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {chapters.map((chapter) => (
            <Card
              key={chapter.id}
              className="chapter-card bg-white/10 border-white/20 text-white hover:bg-white/20 cursor-pointer"
              onClick={() => setSelectedChapter(chapter.id)}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="border-white/30 text-white">
                    Chapter {chapter.id}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{chapter.title}</CardTitle>
                <CardDescription className="text-slate-300">{chapter.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">{chapter.duration}</span>
                  <Link href={`/chapter/${chapter.id}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/30 text-white hover:bg-white/20 bg-transparent"
                    >
                      Read Chapter
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Characters Section */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Meet the Characters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20 text-white text-center">
              <CardHeader>
                <div
                  className="character-avatar w-24 h-24 mx-auto rounded-full bg-cover bg-center mb-4"
                  style={{
                    backgroundImage: `url('/professional-young-woman-marine-biologist-with-div.jpg')`,
                  }}
                />
                <CardTitle>Riya Magdum</CardTitle>
                <CardDescription className="text-slate-300">High School Student</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300">
                  A bright 16-year-old from a well-to-do family in Belagavi. Her passion for coding leads her to discover the importance of empathy and collaboration.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white text-center">
              <CardHeader>
                <div
                  className="character-avatar w-24 h-24 mx-auto rounded-full bg-cover bg-center mb-4"
                  style={{
                    backgroundImage: `url('/elderly-lighthouse-keeper-with-weathered-face-and-.jpg')`,
                  }}
                />
                <CardTitle>Riya's Family</CardTitle>
                <CardDescription className="text-slate-300">Supportive Parents</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300">
                  A successful business family in Belagavi who support Riya's dreams while learning to appreciate her broader vision.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white text-center">
              <CardHeader>
                <div
                  className="character-avatar w-24 h-24 mx-auto rounded-full bg-cover bg-center mb-4"
                  style={{
                    backgroundImage: `url('/mysterious-ancient-sea-creature-with-bioluminescen.jpg')`,
                  }}
                />
                <CardTitle>The Team</CardTitle>
                <CardDescription className="text-slate-300">School Friends</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300">
                  Aditya, Sanjana, and Rohan—students from a government school who teach Riya the true meaning of innovation and determination.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer with creator attribution */}
        <div className="mt-20 border-t border-white/20 pt-8">
          <div className="text-center">
            <p className="text-slate-300 text-lg mb-2">
              Created with ❤️ by <span className="text-white font-semibold">Riya</span>
            </p>
            <p className="text-slate-400 text-sm">An interactive digital storybook experience</p>
          </div>
        </div>
      </div>
    </div>
  )
}
