import { ChapterReader } from "@/components/chapter-reader"
import { notFound } from "next/navigation"

const chapters = {
  1: {
    title: "The Application",
    content: [
      "Riya sat cross-legged on her hostel bed, her laptop balanced precariously on her knees. The cursor blinked at her from the scholarship application form—one question remaining. 'Why do you deserve this opportunity?' Twenty years old, final year of her Computer Science degree, and she still didn't have a good answer.",
      "Outside her window, the campus of Delhi University bustled with life. Students hurried between classes, their voices a familiar symphony of Hindi, English, and everything in between. But Riya barely noticed. Her mind was elsewhere—in the small town of Jaipur where her parents ran a modest textile shop.",
      "'Beta, if you get this scholarship, you can do your Master's abroad,' her father had said last month, his voice crackling through the phone. The hope in his voice had been almost painful to hear. They had sacrificed so much for her education, working long hours in their shop to afford her hostel fees.",
      "Riya's fingers hovered over the keyboard. She thought about her journey—the girl from a small town who had dreamed of coding, who had learned programming on a second-hand laptop, who had spent countless nights in the college computer lab building projects when others slept.",
      "Finally, she began to type: 'I deserve this opportunity because I understand what it means to dream against odds. Because I come from a family that believes education is the greatest wealth. And because I promise to use this knowledge to create opportunities for others like me.' Her finger hit submit before doubt could stop her.",
    ],
    background: "college student on laptop in hostel room with campus view",
    nextChapter: 2,
  },
  2: {
    title: "The Rejection",
    content: [
      "Two months later, Riya stared at the email on her phone screen. 'We regret to inform you...' The words blurred as tears welled up in her eyes. She was sitting in the college canteen, surrounded by friends, but suddenly felt utterly alone.",
      "'Riya? What happened?' her best friend Priya asked, noticing her expression. But Riya couldn't speak. She simply passed the phone across the table. The scholarship—her ticket to a Master's degree abroad—had gone to someone else.",
      "That evening, Riya called home. 'Papa, I didn't get it,' she said, her voice breaking. There was a long silence on the other end. Then her father's steady voice came through, stronger than she expected. 'Beta, one door closing means another will open. You're in your final year—focus on that. Make it your best year yet.'",
      "But how? With no scholarship, her dreams of higher education seemed out of reach. Her family couldn't afford international tuition, and taking a loan felt like too much pressure. Riya lay awake that night, staring at the ceiling of her hostel room, questioning everything.",
      "The next morning, she almost skipped her Advanced Algorithms class. What was the point? But something—pride, stubbornness, or maybe her father's words—got her out of bed. As she sat in class, her professor announced something that made her sit up straight.",
      "'There's a national hackathon next month,' Professor Sharma said. 'First prize includes a full scholarship for Master's program at IIT Delhi, plus an internship at a top tech company. I'm looking for our college's best team to represent us.'",
    ],
    background: "disappointed student reading email in college canteen with friends",
    nextChapter: 3,
    previousChapter: 1,
  },
  3: {
    title: "The Hackathon",
    content: [
      "Riya assembled her team: Priya, who was brilliant with UI/UX; Arjun, a data science wizard; and Karan, whose backend skills were legendary in their batch. For three weeks, they lived and breathed code. The problem statement was challenging—build an AI-powered platform to help small businesses go digital.",
      "Riya thought of her parents' textile shop. How many times had her mother complained about managing inventory manually? How her father struggled with billing? This wasn't just a competition anymore—this was personal.",
      "They called their solution 'Dukaan Sahayak'—Shop Helper. Riya led the coding marathon, often working until 3 AM, fueled by chai and determination. She built an inventory management system that could predict demand patterns. Arjun created a customer analytics dashboard. Priya designed an interface so simple that even Riya's grandmother could use it.",
      "The hackathon was held in Mumbai—a 15-hour train journey from Delhi. Riya had never been to Mumbai before. The city's energy was intoxicating, but also intimidating. Teams from IITs, NITs, and prestigious universities filled the venue. Many had corporate sponsors. Some wore company t-shirts. Riya's team wore their college hoodies, looking decidedly amateur.",
      "When their turn came to present, Riya's hands trembled as she held the microphone. But then she saw her parents' shop in her mind—their hard work, their dreams for her. Her voice steadied. She spoke not just about code and algorithms, but about the millions of small businesses across India that needed such solutions.",
      "The judges were impressed, but so were three other teams. It came down to the final round—a live coding challenge. Fix a critical bug in 30 minutes while everyone watched. Riya's fingers flew across the keyboard. With two minutes left, she found it—a race condition in the payment processing module. She fixed it, deployed, and stepped back. The solution worked flawlessly.",
    ],
    background: "hackathon stage with team presenting their project to judges",
    nextChapter: 4,
    previousChapter: 2,
  },
  4: {
    title: "The Victory",
    content: [
      "'And the winner of the National Collegiate Hackathon 2024 is... Team Dukaan Sahayak from Delhi University!' The announcement echoed through the hall. For a moment, Riya couldn't process it. Then Priya was hugging her, Arjun was shouting, and Karan was doing an impromptu bhangra dance.",
      "On stage, accepting the trophy, Riya's eyes filled with tears. This wasn't just about winning—it was about proving to herself that rejection wasn't the end. The scholarship to IIT Delhi, the internship offer from a unicorn startup, the validation that her dreams were achievable—it all felt surreal.",
      "That night, she video-called her parents. Her mother cried happy tears, and her father's proud smile said more than words ever could. 'Beta, we always knew you could do it,' he said. But Riya knew better—they had hoped, but they couldn't have known. Even she hadn't known.",
      "Back in Delhi, word of their victory spread across campus. Suddenly, Riya and her team were campus celebrities. But more importantly, three small businesses had already reached out, wanting to use their platform. What had started as a competition entry was becoming real.",
      "Professor Sharma called Riya to his office. 'You've done something remarkable,' he said. 'But I have a question—will you take this forward? Start a company? This solution could help thousands of businesses.' Riya had never considered herself an entrepreneur. She was just a girl who liked to code.",
      "That night, sitting in the hostel common room with her team, they made a decision. They would graduate, yes. They would pursue their Master's. But they would also build Dukaan Sahayak into a real product. The scholarship gave them freedom—freedom to take risks, to dream bigger.",
    ],
    background: "team celebrating on stage with trophy and cheering crowd",
    nextChapter: 5,
    previousChapter: 3,
  },
  5: {
    title: "The New Beginning",
    content: [
      "Six months later, Riya stood in front of her final year project panel. But this wasn't just any project presentation—it was a showcase of how Dukaan Sahayak had grown. They now had 50 active users, all small businesses across India. Her parents' textile shop was their first client.",
      "'Ms. Riya Sharma, can you explain your future plans?' one of the panelists asked. Riya smiled. She was no longer the nervous girl who had struggled to write her scholarship application. The rejections, the sleepless nights, the victory—they had all shaped her.",
      "'I plan to pursue my Master's at IIT Delhi while continuing to develop Dukaan Sahayak,' she said confidently. 'We've received interest from an angel investor, and I believe we can scale this to help thousands of small businesses digitize their operations.'",
      "After the presentation, she walked through the campus one last time as an undergraduate. In a few months, she would graduate. But she wasn't leaving—she was evolving. IIT Delhi was just across the city. The girl from Jaipur who had come to Delhi four years ago with a second-hand laptop and big dreams was now a award-winning coder and entrepreneur.",
      "That evening, Riya sat in her favorite spot on campus—under the old neem tree where she had spent countless hours coding, crying, and dreaming. She opened her laptop and started writing an email to her younger self, the one who had submitted that scholarship application with trembling hands.",
      "'Dear Past Riya,' she typed, 'You're going to face rejection. You're going to doubt yourself. You're going to think you're not good enough. But here's what I want you to know—that rejection will lead you to something better. That doubt will fuel your determination. And you are enough, always have been.'",
      "She hit send—not to anyone, but saved it in her drafts. One day, when she mentored young women in tech, she would share this story. For now, she closed her laptop and smiled at the setting sun. This was not an ending—this was just the beginning of Riya's journey.",
    ],
    background: "graduate student at sunset on campus with laptop, looking hopeful and determined",
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
