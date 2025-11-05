import { ChapterReader } from "@/components/chapter-reader"
import { notFound } from "next/navigation"

const chapters = {
  1: {
    title: "The Dream",
    content: [
      "Riya Magdum sat in her well-appointed bedroom in Belagavi, her laptop glowing softly in the evening light. At 16, she was in her final year of high school, but her mind was already racing ahead to bigger dreams. The cursor blinked at her from the coding competition registration form—one question remaining. 'What motivates you to code?'",
      "Outside her window, the peaceful streets of her Belagavi neighborhood were quiet. Her family's comfortable home, with its modern amenities and her father's successful business, provided her every advantage. But Riya wanted something more than comfort—she wanted to create something meaningful.",
      "'Beta, why do you spend so much time on that computer?' her mother would often ask, concerned. 'You already have everything you need for a good future.' But Riya knew that wasn't the point. She wanted to prove herself, to build something that mattered beyond her family's wealth.",
      "Riya's fingers hovered over the keyboard. She thought about how she'd discovered coding in 9th grade, how it had become her passion. While her classmates were content with their privileged lives, she dreamed of using technology to make a difference. She'd taught herself Python, built small apps, and now she was ready for something bigger.",
      "Finally, she began to type: 'I code because I want to prove that privilege comes with responsibility. I want to use my advantages to create solutions for those who don't have the same opportunities. Technology should be a bridge, not a barrier.' Her finger hit submit before doubt could stop her.",
    ],
    background: "teenage student on laptop in modern bedroom with evening light",
    nextChapter: 2,
  },
  2: {
    title: "The Challenge",
    content: [
      "Two weeks later, Riya stared at the email on her phone screen during lunch break at her elite private school. 'Congratulations! You have been selected for the National High School Coding Championship.' Her heart raced. This was it—her chance to prove herself beyond the comfortable bubble of Belagavi.",
      "'Riya! What happened?' her best friend Meera asked, noticing her expression. Riya showed her the phone. The competition would be held in Bangalore, and the winning team would get to present their project at a national tech conference. But there was a catch—it was a team competition.",
      "That evening at dinner, her father beamed with pride. 'This is wonderful, beta! We'll arrange everything—the best resources, private coaching if you need it.' But Riya shook her head. 'Papa, I want to do this on my own merit. Can I form a team with students from different backgrounds? From the government school too?'",
      "Her parents exchanged surprised glances. 'Why would you want to do that?' her mother asked gently. 'You have all the best students in your school to choose from.' But Riya was determined. She had read about the digital divide, seen how students from less privileged backgrounds struggled with access to technology.",
      "'Because I want to learn from different perspectives,' Riya explained. 'I want to build something that actually helps people, not just win a competition. And I can't do that if I only work with people who think like me.' Her father studied her face for a long moment, then slowly nodded with understanding.",
      "The next day, Riya approached the principal with a proposal—to create a joint team with students from the nearby government school. It was unprecedented, but something in Riya's determination convinced him to allow it. This was going to be harder than any code she'd ever written.",
    ],
    background: "high school student looking at phone during lunch break with friends",
    nextChapter: 3,
    previousChapter: 1,
  },
  3: {
    title: "The Team",
    content: [
      "Riya Magdum stood nervously in the principal's office of the government school, waiting to meet the students who had volunteered for her team. Through the window, she could see the stark difference from her air-conditioned private school—fans whirring, paint peeling from walls, but students studying with fierce determination.",
      "Three students entered: Aditya, who had learned coding at the local library; Sanjana, who walked 5 kilometers to school every day but topped her computer science class; and Rohan, who repaired computers at a local shop to support his family while maintaining excellent grades.",
      "The first meeting was awkward. 'Why are you doing this?' Aditya asked bluntly. 'Is this some kind of charity project for you?' Riya felt her face flush. She realized how her proposal might have seemed—a rich girl playing at empathy.",
      "'I know how this looks,' Riya said honestly. 'But I'm tired of living in a bubble. I have resources—a laptop, internet, books. But you have something I don't—real understanding of the problems we need to solve. I want to learn from you, not just work with you.'",
      "Sanjana studied her carefully. 'The competition problem is to create a solution for educational accessibility. What would a girl from a well-to-do family in Belagavi know about that?' The words stung, but Riya knew they were fair.",
      "'You're right,' Riya admitted. 'I don't know. But that's why I need you. I can bring technical skills and resources. You can bring real insight. Together, maybe we can build something that actually matters.' Slowly, cautiously, the others nodded. This team was going to be anything but easy.",
    ],
    background: "diverse group of high school students meeting in simple classroom",
    nextChapter: 4,
    previousChapter: 2,
  },
  4: {
    title: "The Project",
    content: [
      "For three weeks, Riya's comfortable bedroom became a makeshift headquarters. Her parents graciously opened their home to the team, providing snacks and encouraging words. But the real work was navigating the clash of worlds.",
      "'We should use React for the frontend,' Riya suggested during their first technical meeting. Aditya shook his head. 'Most schools in rural areas have slow internet. We need something lightweight.' He was right, and Riya had never even considered it.",
      "Their project, 'Seekho' (Learn), aimed to create an offline-first educational platform that could work on the most basic smartphones. Sanjana contributed insights from her experience—power cuts, limited data, teachers who weren't tech-savvy. Rohan handled the optimization, making every kilobyte count.",
      "Riya handled the backend and provided her laptop and internet for testing. But she was learning more than she was teaching. 'You keep designing for people like you,' Sanjana pointed out one evening. 'Not everyone has a MacBook and unlimited data. Think simpler.'",
      "As the competition day approached, something shifted. They weren't just a team of convenience anymore—they were friends. Riya invited them to dinner, where her parents, initially hesitant, were charmed by her teammates' intelligence and determination. Aditya's jokes, Sanjana's sharp wit, Rohan's quiet wisdom.",
      "'Your daughter has taught us a lot,' Aditya told Riya's father. 'But she's learning too. Real privilege is when you use what you have to lift others up.' Riya felt tears prick her eyes. This competition had become about so much more than winning.",
    ],
    background: "diverse high school team working on laptops in comfortable home setting",
    nextChapter: 5,
    previousChapter: 3,
  },
  5: {
    title: "The Presentation",
    content: [
      "The National High School Coding Championship in Bangalore was unlike anything Riya Magdum had experienced. Teams from across India filled the auditorium—students from IIT coaching centers, coding academies, and elite schools. And there was her team: four students from Belagavi, three from a government school.",
      "'We don't belong here,' Rohan whispered, looking at the sophisticated presentations around them. But Sanjana squared her shoulders. 'We belong here because we built something real. Not something to impress judges—something that actually solves a problem.'",
      "When their turn came to present 'Seekho', Riya let her teammates take the lead. Aditya explained the technical architecture. Sanjana demonstrated how it worked on a basic smartphone with poor internet. Rohan showed the data usage—less than 10MB for a full day's worth of lessons.",
      "The judges were impressed. 'But why did a team from a well-resourced background focus on this problem?' one asked, looking at Riya. She took a breath. 'Because I realized that technology is only powerful when everyone can access it. My teammates taught me that. This isn't my project—it's ours.'",
      "They didn't win first place. A team from Mumbai with an AI-powered platform took that. But they won 'Best Social Impact' and a grant to develop their project further. As they stood on stage, Riya looked at her teammates—no longer just collaborators, but friends who had changed her perspective forever.",
      "On the train back to Belagavi, Riya's phone buzzed with messages. Several schools wanted to pilot 'Seekho'. A local NGO wanted to partner. Her father called, pride evident in his voice. 'You've made us proud, beta. Not because you won, but because of how you won.'",
      "Riya looked at her teammates, who were already planning improvements to their app. She was 16, still in high school, but she'd learned something more valuable than any code: that true innovation comes from understanding people different from yourself. This was just the beginning of her journey.",
    ],
    background: "high school team presenting on stage at national competition with audience",
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
