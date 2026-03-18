import interCollegeHackathonImage from '../assets/activity-photos/hackathon/1.jpg'
import msmeHackathonImage from '../assets/activity-photos/msme/1.jpg'
import aimHackathonImage from '../assets/activity-photos/sih/1.jpg'

const activities = [
  {
    id: 1,
    title: 'MSME Idea Hackathon 5.0 - Project Experience',
    date: '2025',
    description:
      'Built an IoT-based solar tracking and smart irrigation system. Shortlisted up to the 3rd round of MSME Hackathon.',
    image: msmeHackathonImage,
    fullContent: [
      'I participated in the MSME Idea Hackathon 5.0 with my project "IoT Integrated Solar Tracking and Soil Moisture Management System." The main problem I focused on was how farmers lose energy due to fixed solar panels and waste water because irrigation is not based on real soil conditions. I wanted to solve both problems together instead of treating them separately.',
      'To achieve this, I first built a solar tracking system that automatically follows the sun to increase energy generation. Then I upgraded it by integrating soil moisture sensors and IoT, so the system can monitor soil conditions in real time and control irrigation only when needed. The entire system is powered using solar energy, making it completely self-sustainable and suitable for rural areas.',
      'Through this project, I was shortlisted up to the 3rd round of the MSME Idea Hackathon, which involved preparing technical documents, financial planning, and presenting the idea clearly to evaluators. Each round helped me improve how I explain my ideas in a simple and practical way.',
      'From this experience, I learned how to think beyond just building a project and focus on real-world impact, scalability, and usability. I also gained confidence in presenting technical ideas, understanding government-level evaluation criteria, and structuring solutions that are both innovative and practical.',
    ],
  },
  {
    id: 2,
    title: "AIM'35 Hackathon - Infynd",
    date: '2025',
    description:
      'Worked on an AI-based Autonomous Company Intelligence Agent in a 36-hour national-level hackathon.',
    image: aimHackathonImage,
    fullContent: [
      "I participated in a national-level 36-hour hackathon called AIM'35 (Artificial Intelligent Mind), conducted by Infynd at Dr. Mahalingam College of Engineering and Technology. This hackathon focused on solving real-world industry problems using AI, and it was one of the most intense and valuable experiences for me.",
      'During the competition, our team worked on multiple problem statements related to AI-based solutions. We mainly focused on building an Autonomous Company Intelligence Agent, where the goal was to extract and structure company information from websites and present it in a clear and usable format. Along with that, we also explored other problem areas as part of the hackathon requirements.',
      'In this project, we worked on designing the complete workflow from collecting data, processing it using an AI model, and finally displaying it through a simple and understandable user interface. We tried both offline and live data extraction methods and worked on making the system stable, even when real-time data failed. The idea was not just to build something that works, but something that can handle real-world challenges.',
      'Even though we could not fully complete everything within the 36 hours, we successfully built the core structure of the system and demonstrated how the solution works. More than the final output, the process itself taught us how real-world problem statements differ from college projects, why planning matters before coding, how to work under continuous time pressure, and how to adapt quickly when things fail.',
      'One important thing I realized is that building a perfect solution is not always possible in limited time, but building a stable and explainable solution is what really matters. Overall, AIM\'35 was not just a competition for me, it was a learning experience that improved my technical thinking, problem-solving ability, and confidence. It also motivated me to improve this project further and use it in future hackathons.',
    ],
  },
  {
    id: 3,
    title: '24-Hour Inter-College Hackathon Experience',
    date: '2024',
    description:
      'Built SensoGuard, a device monitoring system using MQTT and real-time data handling.',
    image: interCollegeHackathonImage,
    fullContent: [
      'I participated in a 24-hour inter-college hackathon along with my team to represent our AIDS department. This competition was focused on solving real-world problems by building working solutions within a limited time of 24 hours. It tested our ability to think quickly, work as a team, and implement ideas under pressure.',
      'During the hackathon, our team of four members developed a project called SensoGuard, which is a software-based system to monitor device health. In this project, I worked on understanding the system flow, implementing parts of the backend logic, and helping in integrating device communication using MQTT. We focused on detecting whether a device is online, offline, or not working properly and displaying the results on a web dashboard.',
      'This experience helped me learn many practical things beyond theory. I improved my understanding of real-time data handling, system design, and how different components like backend, communication protocols, and UI work together. I also learned how to manage time effectively, work in a team, and stay focused during long working hours.',
      'Overall, this hackathon gave me hands-on experience and increased my confidence in building real-world projects.',
    ],
  },
]

export default activities
