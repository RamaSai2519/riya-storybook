"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const chapters = [
  {
    id: 1,
    title: "The Arrival",
    description: "Dr. Maya Chen arrives at Beacon Point Lighthouse to begin her marine research.",
    duration: "5 min read",
  },
  {
    id: 2,
    title: "Strange Signals",
    description: "Maya discovers unusual sonar readings coming from the deep ocean trenches.",
    duration: "7 min read",
  },
  {
    id: 3,
    title: "The Deep Dive",
    description: "A dangerous underwater expedition reveals an ancient secret.",
    duration: "8 min read",
  },
  {
    id: 4,
    title: "The Guardian's Tale",
    description: "Old lighthouse keeper Thomas shares the truth about Beacon Point's history.",
    duration: "6 min read",
  },
  {
    id: 5,
    title: "The Choice",
    description: "Maya must decide whether to reveal her discovery to the world.",
    duration: "9 min read",
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">The Lighthouse Keeper's Secret</h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-3xl mx-auto text-pretty">
              A thrilling adventure about discovery, courage, and the mysteries that lie beneath the ocean's surface.
            </p>
          </div>
        </div>
      </div>

      {/* Chapter Selection */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Chapter</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Follow Dr. Maya Chen's journey as she uncovers the secrets hidden beneath Beacon Point Lighthouse.
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
                <CardTitle>Dr. Maya Chen</CardTitle>
                <CardDescription className="text-slate-300">Marine Biologist</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300">
                  A brilliant young scientist who discovers something extraordinary in the depths near Beacon Point.
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
                <CardTitle>Thomas Hartwell</CardTitle>
                <CardDescription className="text-slate-300">Lighthouse Keeper</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300">
                  The wise old keeper of Beacon Point who has guarded its secrets for over forty years.
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
                <CardTitle>The Guardian</CardTitle>
                <CardDescription className="text-slate-300">Ancient Protector</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300">
                  A mysterious being from the depths who has watched over the ocean for centuries.
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
