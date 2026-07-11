import {
  Award,
  Brain,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Server,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  UsersRound
} from 'lucide-react';
import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaLinkedin,
  FaReact
} from 'react-icons/fa';
import { SiBootstrap, SiHibernate, SiMysql, SiPostman, SiPostgresql, SiSpring, SiSpringboot, SiThymeleaf } from 'react-icons/si';

export const profile = {
  initials: 'PP',
  name: 'Piyush Pradhan',
  role: 'Java Full Stack Developer',
  location: 'India',
  email: 'piyupradhan2001@gmail.com',
  phone: '+91 88057 89785',
  resume: '/resume.pdf',
  image: '/profile.jpg',
  headline:
    'I build scalable full-stack systems using Java, Spring Boot, MySQL, REST APIs, React, and modern frontend technologies.',
  typingRoles: ['Java Full Stack Developer', 'Spring Boot Developer'],
  socials: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/piyush-pradhan-883b45255?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      icon: FaLinkedin
    },
    { label: 'GitHub', href: 'https://github.com/piyupradhan2001-lgtm', icon: FaGithub },
    { label: 'Email', href: 'mailto:piyupradhan2001@gmail.com', icon: Mail }
  ]
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' }
];

export const about = {
  intro:
    'Java full stack developer focused on building clean, secure, and maintainable applications with Spring Boot, REST APIs, relational databases, and React interfaces.',
  education: 'B.E. graduate from KITS Nagpur with a diploma foundation from Government Polytechnic, Bramhapuri.',
  experience:
    'Hands-on experience building RESTful services, integrating MySQL databases, designing feature workflows, testing APIs, and collaborating with frontend interfaces.',
  objective:
    'To contribute to high-impact engineering teams where I can build reliable backend systems, improve full-stack engineering skills, and deliver polished user-facing products.'
};

export const stats = [
  { label: 'Projects Completed', value: '8+', icon: BriefcaseBusiness },
  { label: 'Technologies', value: '20+', icon: Sparkles },
  { label: 'Years of Learning', value: '2+', icon: GraduationCap },
  { label: 'Problem Solving', value: '150+', icon: Brain }
];

export const skillGroups = [
  {
    title: 'Programming Languages',
    icon: Server,
    skills: [
      { name: 'Java 8, 17', level: 88, icon: FaJava },
      { name: 'SQL', level: 84, icon: Database },
      { name: 'JavaScript', level: 80, icon: FaJs }
    ]
  },
  {
    title: 'Frontend Technologies',
    icon: Code2,
    skills: [
      { name: 'HTML', level: 88, icon: FaHtml5 },
      { name: 'CSS', level: 84, icon: FaCss3Alt },
      { name: 'Bootstrap', level: 78, icon: SiBootstrap },
      { name: 'Thymeleaf', level: 76, icon: SiThymeleaf }
    ]
  },
  {
    title: 'Databases',
    icon: Database,
    skills: [
      { name: 'MySQL', level: 84, icon: SiMysql },
      { name: 'PostgreSQL', level: 76, icon: SiPostgresql }
    ]
  },
  {
    title: 'Frameworks & Technologies',
    icon: Sparkles,
    skills: [
      { name: 'React', level: 76, icon: FaReact },
      { name: 'Spring', level: 82, icon: SiSpring },
      { name: 'Spring Boot', level: 84, icon: SiSpringboot },
      { name: 'Spring MVC', level: 80, icon: SiSpring },
      { name: 'Hibernate', level: 78, icon: SiHibernate },
      { name: 'JPA', level: 80, icon: Database },
      { name: 'JDBC', level: 78, icon: Database },
      { name: 'RESTful APIs', level: 86, icon: TerminalSquare },
      { name: 'Microservices Basics', level: 68, icon: Server },
      { name: 'JSON', level: 82, icon: Code2 }
    ]
  },
  {
    title: 'Tools & Platforms',
    icon: UsersRound,
    skills: [
      { name: 'GitHub', level: 84, icon: FaGithub },
      { name: 'VS Code', level: 82, icon: Code2 },
      { name: 'Postman', level: 86, icon: SiPostman }
    ]
  },
  {
    title: 'Core Concepts',
    icon: Brain,
    skills: [
      { name: 'OOP', level: 86, icon: Brain },
      { name: 'MVC Architecture', level: 82, icon: Code2 },
      { name: 'REST API Design', level: 86, icon: TerminalSquare },
      { name: 'Role-Based Access Control', level: 76, icon: ShieldCheck },
      { name: 'Database Normalization', level: 80, icon: Database }
    ]
  }
];

export const education = [
  {
    institution: 'Kavikulguru Institute Of Technology And Science (KITS), Nagpur',
    degree: 'Bachelor of Engineering (B.E.)',
    duration: '2020 - 2023'
  },
  {
    institution: 'Government Polytechnic, Bramhapuri',
    degree: 'Diploma',
    duration: '2017 - 2020'
  }
];

export const experiences = [
  {
    company: 'Kavyainfoweb Pvt. Ltd. - Nagpur, Maharashtra, India',
    role: 'Full Stack Java Developer',
    duration: '08/2025 - Present',
    points: [
      'Conduct software analysis, testing, programming, and debugging.',
      'Recognize production and non-production application issues and resolve them.',
      'Tech stack: Java 8, 17, Spring Boot, REST, Spring Security, Spring Data JPA with Hibernate, SQL Server, HTML, and JavaScript.'
    ]
  },
  {
    company: 'RBrickks Technology Pvt. Ltd. - Pune',
    role: 'Java Full Stack Developer Intern',
    duration: '2023',
    points: [
      'Worked as an intern on Java full stack development tasks.',
      'Practiced frontend and backend integration using Java-based application workflows.',
      'Improved understanding of full-stack development, debugging, and team-based project delivery.'
    ]
  }
];

export const projects = [
  {
    title: 'Rxincredible',
    description: 'A live client healthcare platform built with a polished frontend experience and practical service workflows.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'REST API'],
    features: ['Live client project', 'Responsive UI', 'Healthcare workflows', 'Production website'],
    github: 'https://github.com/piyupradhan2001-lgtm',
    live: 'https://www.rxincredible.com/',
    imageTone: 'from-cyan-400 via-blue-500 to-emerald-400'
  },
  {
    title: 'Rent Ledger Management System',
    description: 'A backend-focused rent tracking system for tenants, payments, monthly dues, and ledger history.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'JPA', 'REST API'],
    features: ['Tenant records', 'Payment ledger', 'Due reminders', 'Role-ready API design'],
    github: 'https://github.com/piyupradhan2001-lgtm',
    live: '#',
    imageTone: 'from-blue-500 via-cyan-400 to-violet-500'
  },
  {
    title: 'Hospital Management System',
    description: 'Patient, doctor, appointment, and billing workflows designed with clean CRUD APIs.',
    technologies: ['Spring Boot', 'Hibernate', 'MySQL', 'React'],
    features: ['Appointment booking', 'Patient history', 'Admin dashboard', 'API validation'],
    github: 'https://github.com/piyupradhan2001-lgtm',
    live: '#',
    imageTone: 'from-emerald-400 via-cyan-500 to-blue-500'
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack commerce foundation with product catalog, cart flow, orders, and secure service layers.',
    technologies: ['Java', 'Spring Security', 'React', 'Tailwind CSS'],
    features: ['Product catalog', 'Cart workflow', 'Order APIs', 'Auth-ready modules'],
    github: 'https://github.com/piyupradhan2001-lgtm',
    live: '#',
    imageTone: 'from-fuchsia-500 via-violet-500 to-blue-500'
  },
  {
    title: 'Portfolio Website',
    description: 'Premium responsive portfolio with animated sections, contact validation, and recruiter-focused content.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    features: ['Dark mode', 'Scroll reveals', 'Animated cursor', 'Resume download'],
    github: 'https://github.com/piyupradhan2001-lgtm',
    live: '#',
    imageTone: 'from-sky-400 via-indigo-500 to-purple-500'
  }
];

export const certifications = [
  { title: 'Head Event Coordinator', organization: 'College Forum', icon: Award },
  { title: 'Java Full Stack Development', organization: 'Naresh IT, Hyderabad', icon: FaJava }
];

export const contact = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, icon: Phone },
  { label: 'Location', value: profile.location, href: '#', icon: MapPin }
];

export const highlights = [
  'Java, Spring Boot, REST API development',
  'MySQL schema design and JPA persistence',
  'React UI development and full-stack integration',
  'Clean frontend integration with React and Tailwind CSS'
];

export const awards = [
  { icon: Award, text: 'Recruiter-ready backend portfolio' },
  { icon: ShieldCheck, text: 'Secure API design mindset' },
  { icon: Code2, text: 'Full-stack learning path' }
];
