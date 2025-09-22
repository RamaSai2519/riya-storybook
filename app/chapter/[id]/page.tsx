import { ChapterReader } from "@/components/chapter-reader"
import { notFound } from "next/navigation"

const chapters = {
  1: {
    title: "The Arrival",
    content: [
      "The salty breeze carried the scent of seaweed and adventure as Dr. Maya Chen stepped out of her rental car. Before her stood Beacon Point Lighthouse, its white tower stretching toward the gray morning sky like a finger pointing to secrets yet unknown.",
      "Maya had traveled here from the university's marine biology department, drawn by reports of unusual marine activity in the deep waters surrounding this remote coastal outpost. Her equipment cases clinked softly as she lifted them from the trunk, each one containing instruments that could peer into the ocean's mysteries.",
      "The lighthouse keeper, Thomas Hartwell, emerged from the keeper's quarters. His weathered face told stories of decades spent watching over these treacherous waters. 'Dr. Chen, I presume?' he called out, his voice carrying the authority of someone who had seen both calm seas and raging storms.",
      "'That's right,' Maya replied, extending her hand. 'Thank you for allowing me to set up my research station here. The university's preliminary sonar readings from this area have been... intriguing.'",
      "Thomas's eyes flickered with something Maya couldn't quite identify—was it concern? Knowledge? 'Aye, these waters have always been special,' he said simply. 'Come, let me show you where you can set up your equipment. But Dr. Chen...' He paused, looking out toward the horizon where dark clouds were gathering. 'Some mysteries are better left undisturbed.'",
    ],
    background: "dramatic lighthouse on rocky coast with research equipment and stormy sky",
    nextChapter: 2,
  },
  2: {
    title: "Strange Signals",
    content: [
      "Three days into her research, Maya's hydrophones began picking up something extraordinary. The deep-sea monitoring equipment, positioned at various depths around Beacon Point, was detecting patterns unlike anything in her extensive database of marine sounds.",
      "The signals came in rhythmic pulses, almost like a heartbeat, emanating from the deepest trenches nearly two miles below the surface. Maya adjusted her headphones and leaned closer to the sonar display, her coffee growing cold as she became absorbed in the data.",
      "'These readings can't be right,' she muttered, running the audio through her analysis software. The frequency patterns were too complex, too organized to be natural geological activity. Yet they were too deep and too large to be from any known marine life.",
      "Thomas appeared in the doorway of her makeshift laboratory, carrying a steaming mug of tea. 'Working late again, Dr. Chen?' His eyes fell on the sonar display, and Maya noticed his expression tighten almost imperceptibly.",
      "'Thomas, have you ever heard anything unusual from the deep waters here? These signals... they're unlike anything I've encountered in fifteen years of marine research.' Maya turned the speakers toward him, letting the haunting, rhythmic pulses fill the room.",
      "The old lighthouse keeper was quiet for a long moment, his gaze fixed on the dark ocean beyond the window. 'Forty-three years I've kept this light burning,' he said finally. 'And in all that time, I've learned that the sea keeps its own counsel. Some sounds... some sounds are meant to stay in the deep.'",
    ],
    background: "underwater sonar equipment detecting mysterious signals in deep ocean trenches",
    nextChapter: 3,
    previousChapter: 1,
  },
  3: {
    title: "The Deep Dive",
    content: [
      "Against Thomas's gentle warnings, Maya decided to investigate the source of the signals directly. She had arranged for a deep-sea submersible from the nearby marine research station, and as dawn broke over Beacon Point, she prepared for the most dangerous dive of her career.",
      "The submersible *Deep Explorer* descended through layers of ocean that grew progressively darker and more mysterious. At 500 feet, schools of bioluminescent jellyfish drifted past like living stars. At 1,000 feet, the last traces of sunlight faded into an eternal twilight.",
      "Maya's instruments showed she was approaching the source of the signals. The rhythmic pulses grew stronger, more distinct, as if something massive was awakening in response to her presence. Her heart raced as the submersible's lights pierced the darkness ahead.",
      "What she saw defied every scientific principle she had ever learned. Rising from the ocean floor was a structure—not natural, not human, but something else entirely. It pulsed with a soft, blue-green light that seemed to breathe with the rhythm of the mysterious signals.",
      "Ancient coral formations had grown around it, but the structure itself was clearly artificial, its surfaces covered in patterns that seemed to shift and flow like living text. As Maya maneuvered the submersible closer, she realized she was looking at something that had been here far longer than human civilization.",
      "Suddenly, a massive shadow moved past the submersible's viewport. Maya's breath caught as she glimpsed something enormous and graceful, with bioluminescent patterns that matched the structure's glow. It was watching her, she realized—this guardian of the deep had been the source of the signals all along.",
      "The creature's eyes, ancient and intelligent, met hers through the submersible's window. In that moment, Maya understood that she had discovered something that would change everything—if she lived to tell about it.",
    ],
    background: "deep ocean submersible discovering ancient glowing structure with mysterious sea creature",
    nextChapter: 4,
    previousChapter: 2,
  },
  4: {
    title: "The Guardian's Tale",
    content: [
      "Maya surfaced from her dive with her mind reeling from what she had witnessed. The ancient structure, the guardian creature—it all seemed impossible, yet her instruments had recorded everything. She found Thomas waiting for her at the dock, his expression grave but unsurprised.",
      "'You saw it, didn't you?' he said simply, helping her secure the submersible. 'The Guardian of the Deep.'",
      "Maya stared at him in amazement. 'You knew? All this time, you knew what was down there?'",
      "Thomas nodded slowly, his weathered hands steady on the dock lines. 'My grandfather was the lighthouse keeper before me, and his father before him. The Hartwells have been guardians of a different sort—keeping the secret, protecting both the creature below and the people above.'",
      "As they walked back toward the lighthouse, Thomas began to share the story that had been passed down through generations of his family. 'The creature—we call it the Guardian—has been here since before recorded history. It's not just an animal, Dr. Chen. It's a protector, a keeper of the ocean's balance.'",
      "'The structure you saw is ancient beyond measure. Some say it's a temple, others believe it's a kind of monitoring station. What we know for certain is that the Guardian tends to it, and in return, it maintains the delicate ecosystem of these waters.'",
      "Maya listened in fascination as Thomas explained how his family had learned to communicate with the Guardian through light signals from the lighthouse—a partnership that had prevented countless disasters and protected the creature from those who might exploit it.",
      "'But now,' Thomas said, his voice heavy with concern, 'the Guardian is aging. The signals you've been detecting—they're not just communication. They're a call for help. The Guardian is dying, and without it, these waters will become lifeless within a generation.'",
    ],
    background: "lighthouse keeper sharing ancient secrets with scientist at sunset",
    nextChapter: 5,
    previousChapter: 3,
  },
  5: {
    title: "The Choice",
    content: [
      "Maya spent the night poring over her data, Thomas's revelations, and the weight of the decision before her. She had made the discovery of a lifetime—proof of an ancient intelligence that had been protecting Earth's oceans for millennia. But with that discovery came an impossible choice.",
      "If she published her findings, the scientific community would be revolutionized. Her career would be made, and humanity would finally know they were not alone on their planet. But the Guardian, already weakened and dying, would become the subject of countless expeditions, studies, and potentially exploitation.",
      "As dawn approached, Maya stood at the lighthouse's observation deck, watching the sun paint the ocean in shades of gold and crimson. The Guardian's signals had grown weaker overnight, and she knew time was running out.",
      "Thomas joined her, carrying two cups of coffee. 'My grandfather faced a similar choice once,' he said quietly. 'A government expedition came here in 1952, looking for what they called 'anomalous readings.' He could have told them everything, become famous, maybe even wealthy.'",
      "'What did he do?' Maya asked.",
      "'He chose the Guardian. He led them away from the deep waters, convinced them their equipment was malfunctioning. The secret remained safe, and the Guardian continued its work.' Thomas paused, studying Maya's face. 'But that was a different time. The world is smaller now, more connected. The choice you make will have consequences far beyond this lighthouse.'",
      "Maya closed her eyes, feeling the weight of the decision. She thought about her career, her dreams of scientific recognition, and then about the ancient creature dying in the depths below. When she opened her eyes, her choice was clear.",
      "'Help me understand how to communicate with the Guardian,' she said to Thomas. 'If it's dying, maybe there's something we can do. Some way to help it heal, or... or find a successor.'",
      "Thomas smiled, the first genuine smile she had seen from him since her arrival. 'Now you're thinking like a true guardian, Dr. Chen. The lighthouse has room for one more keeper, if you're willing to stay.'",
      "As Maya nodded, accepting her new role as protector of the deep, the Guardian's signals pulsed once more through the water—stronger now, as if it sensed that its ancient vigil would continue with a new generation of guardians to watch over the secrets of the sea.",
    ],
    background: "lighthouse at sunrise with scientist and keeper making momentous decision",
    previousChapter: 4,
  },
}

export default function ChapterPage({ params }: { params: { id: string } }) {
  const chapterId = Number.parseInt(params.id)
  const chapter = chapters[chapterId as keyof typeof chapters]

  if (!chapter) {
    notFound()
  }

  return <ChapterReader chapter={chapter} chapterId={chapterId} />
}
