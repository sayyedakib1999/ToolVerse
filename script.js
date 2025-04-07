// Enhanced Tools data
const tools = [
    {
        name: "Bubble",
        category: "No-Code Web Development",
        link: "https://bubble.io",
        description: "Build web applications without code. Create complex, scalable applications with Bubble's visual programming platform.",
        pricing: "Free plan available, paid plans start at $25/month",
        features: ["Visual Programming", "Database Management", "API Integration", "User Authentication"],
        rating: 4.8,
        users: "500K+",
        launched: "2012",
        tags: ["No-Code", "Web Development", "Database", "API"]
    },
    {
        name: "ChatGPT",
        category: "AI Writing",
        link: "https://openai.com/chatgpt",
        description: "Advanced AI language model for natural conversations, content creation, and problem-solving.",
        pricing: "Free tier available, Plus subscription at $20/month",
        features: ["Natural Language Processing", "Content Generation", "Code Assistance", "Language Translation"],
        rating: 4.9,
        users: "100M+",
        launched: "2022",
        tags: ["AI", "Writing", "Language Model", "Automation"]
    },
    {
        name: "GitHub Copilot",
        category: "AI Code Generation",
        link: "https://github.com/features/copilot",
        description: "AI pair programmer that helps you write better code faster with intelligent code suggestions.",
        pricing: "Individual plan at $10/month, Business plan at $19/user/month",
        features: ["Code Suggestions", "Multi-language Support", "IDE Integration", "Context Awareness"],
        rating: 4.7,
        users: "1M+",
        launched: "2021",
        tags: ["AI", "Programming", "Code Generation", "Development"]
    },
    {
        name: "Midjourney",
        category: "AI Image Creation",
        link: "https://www.midjourney.com",
        description: "Create stunning artwork and illustrations using AI-powered image generation.",
        pricing: "Basic plan at $10/month, Standard plan at $30/month",
        features: ["Image Generation", "Style Customization", "High Resolution", "Discord Integration"],
        rating: 4.8,
        users: "2M+",
        launched: "2022",
        tags: ["AI", "Image Generation", "Art", "Design"]
    },
    {
        name: "Zapier",
        category: "No-Code Automation",
        link: "https://zapier.com",
        description: "Automate workflows between apps and services without coding knowledge.",
        pricing: "Free tier available, paid plans start at $29.99/month",
        features: ["Workflow Automation", "App Integration", "Custom Actions", "Scheduled Tasks"],
        rating: 4.7,
        users: "3M+",
        launched: "2011",
        tags: ["Automation", "Integration", "Workflow", "No-Code"]
    },
    {
        name: "Figma",
        category: "No-Code Web Development",
        link: "https://www.figma.com",
        description: "Collaborative interface design tool that allows teams to design, prototype, and hand off designs.",
        pricing: "Free plan available, Professional plan at $12/month",
        features: ["UI Design", "Prototyping", "Collaboration", "Design Systems"],
        rating: 4.9,
        users: "4M+",
        launched: "2016",
        tags: ["Design", "Prototyping", "Collaboration", "UI/UX"]
    },
    {
        name: "Jasper",
        category: "AI Writing",
        link: "https://www.jasper.ai",
        description: "AI content generator for marketing copy, blog posts, and creative writing.",
        pricing: "Starter plan at $40/month, Business plan at $99/month",
        features: ["Content Generation", "SEO Optimization", "Tone Customization", "Team Collaboration"],
        rating: 4.6,
        users: "100K+",
        launched: "2021",
        tags: ["AI", "Content Writing", "Marketing", "SEO"]
    },
    {
        name: "DALL-E",
        category: "AI Image Creation",
        link: "https://openai.com/dall-e-2",
        description: "AI system that creates realistic images and art from natural language descriptions.",
        pricing: "Pay-as-you-go pricing, starting at $0.02 per image",
        features: ["Text-to-Image", "Image Editing", "Style Transfer", "High Resolution"],
        rating: 4.7,
        users: "1M+",
        launched: "2021",
        tags: ["AI", "Image Generation", "Art", "Design"]
    },
    {
        name: "Webflow",
        category: "No-Code Web Development",
        link: "https://webflow.com",
        description: "Visual web development platform that lets you design, build, and launch websites without coding.",
        pricing: "Free plan available, paid plans start at $14/month",
        features: ["Visual Editor", "CMS", "E-commerce", "Hosting"],
        rating: 4.8,
        users: "200K+",
        launched: "2013",
        tags: ["No-Code", "Web Development", "CMS", "E-commerce"]
    },
    {
        name: "Make (Integromat)",
        category: "No-Code Automation",
        link: "https://www.make.com",
        description: "Visual platform for building automated workflows between apps and services.",
        pricing: "Free plan available, paid plans start at $9/month",
        features: ["Visual Workflows", "App Integration", "Data Transformation", "Scheduled Scenarios"],
        rating: 4.6,
        users: "100K+",
        launched: "2017",
        tags: ["Automation", "Integration", "Workflow", "No-Code"]
    },
    {
        name: "Claude",
        category: "AI Writing",
        link: "https://www.anthropic.com/claude",
        description: "Advanced AI assistant for writing, analysis, and coding with a focus on helpfulness and safety.",
        pricing: "Claude 3 Opus at $15/million tokens, Claude 3 Sonnet at $3/million tokens",
        features: ["Long Context", "Code Generation", "Data Analysis", "Creative Writing"],
        rating: 4.8,
        users: "500K+",
        launched: "2023",
        tags: ["AI", "Writing", "Analysis", "Coding"]
    },
    {
        name: "Stable Diffusion",
        category: "AI Image Creation",
        link: "https://stability.ai",
        description: "Open-source AI image generation model that creates images from text descriptions.",
        pricing: "Free for personal use, commercial licensing available",
        features: ["Text-to-Image", "Image-to-Image", "Inpainting", "Custom Training"],
        rating: 4.5,
        users: "5M+",
        launched: "2022",
        tags: ["AI", "Image Generation", "Open Source", "Customization"]
    },
    {
        name: "Airtable",
        category: "No-Code Web Development",
        link: "https://www.airtable.com",
        description: "Flexible database platform that combines the features of a database with the simplicity of a spreadsheet.",
        pricing: "Free plan available, paid plans start at $10/month",
        features: ["Database", "Automation", "API", "Templates"],
        rating: 4.7,
        users: "300K+",
        launched: "2012",
        tags: ["Database", "Spreadsheet", "Automation", "Collaboration"]
    },
    {
        name: "Notion",
        category: "No-Code Web Development",
        link: "https://www.notion.so",
        description: "All-in-one workspace for notes, tasks, wikis, and databases.",
        pricing: "Free plan available, paid plans start at $8/month",
        features: ["Notes", "Databases", "Templates", "Collaboration"],
        rating: 4.8,
        users: "30M+",
        launched: "2016",
        tags: ["Productivity", "Notes", "Database", "Collaboration"]
    },
    {
        name: "Copy.ai",
        category: "AI Writing",
        link: "https://www.copy.ai",
        description: "AI-powered copywriting tool for creating marketing copy, blog posts, and social media content.",
        pricing: "Free plan available, paid plans start at $36/month",
        features: ["Marketing Copy", "Blog Posts", "Social Media", "Email Copy"],
        rating: 4.5,
        users: "500K+",
        launched: "2020",
        tags: ["AI", "Copywriting", "Marketing", "Content"]
    },
    {
        name: "Canva",
        category: "No-Code Web Development",
        link: "https://www.canva.com",
        description: "Graphic design platform for creating social media graphics, presentations, and other visual content.",
        pricing: "Free plan available, Pro plan at $12.99/month",
        features: ["Templates", "Stock Photos", "Collaboration", "Brand Kit"],
        rating: 4.8,
        users: "100M+",
        launched: "2013",
        tags: ["Design", "Graphics", "Templates", "Collaboration"]
    },
    {
        name: "Synthesia",
        category: "AI Video Creation",
        link: "https://www.synthesia.io",
        description: "Create professional AI videos with avatars and voiceovers in minutes.",
        pricing: "Starts at $30/month",
        features: ["AI Avatars", "Text-to-Speech", "Custom Scripts", "Multiple Languages"],
        rating: 4.7,
        users: "200K+",
        launched: "2017",
        tags: ["AI", "Video", "Avatar", "Voice"]
    },
    {
        name: "Descript",
        category: "AI Audio Creation",
        link: "https://www.descript.com",
        description: "All-in-one audio & video editing with AI-powered features.",
        pricing: "Free plan available, Creator plan at $12/month",
        features: ["Audio Editing", "Transcription", "Voice Cloning", "Podcast Studio"],
        rating: 4.8,
        users: "1M+",
        launched: "2019",
        tags: ["Audio", "Video", "Podcast", "Transcription"]
    },
    {
        name: "RunwayML",
        category: "AI Video Creation",
        link: "https://runwayml.com",
        description: "Create and edit videos with AI-powered tools and effects.",
        pricing: "Free plan available, Pro plan at $15/month",
        features: ["Video Generation", "Motion Tracking", "Green Screen", "Text to Video"],
        rating: 4.6,
        users: "500K+",
        launched: "2018",
        tags: ["AI", "Video", "Motion", "Effects"]
    },
    {
        name: "Murf",
        category: "AI Audio Creation",
        link: "https://murf.ai",
        description: "AI voice generator for creating natural-sounding voiceovers.",
        pricing: "Free plan available, Pro plan at $26/month",
        features: ["Voice Generation", "Multiple Languages", "Voice Styles", "Text to Speech"],
        rating: 4.7,
        users: "300K+",
        launched: "2020",
        tags: ["AI", "Voice", "Audio", "Text to Speech"]
    },
    {
        name: "Obviously AI",
        category: "AI Data Analysis",
        link: "https://www.obviously.ai",
        description: "No-code AI platform for data analysis and predictions.",
        pricing: "Starts at $75/month",
        features: ["Predictive Analytics", "Data Visualization", "AutoML", "No-Code"],
        rating: 4.5,
        users: "50K+",
        launched: "2020",
        tags: ["AI", "Data Analysis", "Machine Learning", "Analytics"]
    },
    {
        name: "Glide",
        category: "No-Code Mobile Apps",
        link: "https://www.glideapps.com",
        description: "Build mobile apps from spreadsheets without coding.",
        pricing: "Free plan available, Pro plan at $32/month",
        features: ["Spreadsheet Apps", "Custom UI", "Data Integration", "PWA Support"],
        rating: 4.7,
        users: "200K+",
        launched: "2019",
        tags: ["No-Code", "Mobile Apps", "Spreadsheet", "PWA"]
    },
    {
        name: "Adalo",
        category: "No-Code Mobile Apps",
        link: "https://www.adalo.com",
        description: "Create native mobile apps without code.",
        pricing: "Starts at $50/month",
        features: ["Native Apps", "Custom Components", "Database", "App Store Publishing"],
        rating: 4.6,
        users: "100K+",
        launched: "2018",
        tags: ["No-Code", "Mobile Apps", "Native", "App Development"]
    },
    {
        name: "Knime",
        category: "AI Data Analysis",
        link: "https://www.knime.com",
        description: "Open-source data analytics platform with AI capabilities.",
        pricing: "Free open-source version, Enterprise pricing available",
        features: ["Data Mining", "Machine Learning", "Visual Workflows", "Integration"],
        rating: 4.5,
        users: "150K+",
        launched: "2006",
        tags: ["Data Analysis", "Machine Learning", "Open Source", "Analytics"]
    },
    {
        name: "Framer",
        category: "No-Code Web Development",
        link: "https://www.framer.com",
        description: "Design and launch responsive websites without coding using a powerful visual editor.",
        pricing: "Free plan available, Pro plan at $20/month",
        features: ["Visual Editor", "Components", "Animations", "Hosting"],
        rating: 4.7,
        users: "1M+",
        launched: "2014",
        tags: ["Web Development", "Design", "No-Code", "Responsive"]
    },
    {
        name: "Wix",
        category: "No-Code Web Development",
        link: "https://www.wix.com",
        description: "Website builder platform with AI-powered design assistance and extensive templates.",
        pricing: "Free plan available, Business plans from $16/month",
        features: ["AI Site Builder", "Templates", "E-commerce", "SEO Tools"],
        rating: 4.5,
        users: "200M+",
        launched: "2006",
        tags: ["Website Builder", "E-commerce", "Templates", "Hosting"]
    },
    {
        name: "Retool",
        category: "No-Code Web Development",
        link: "https://retool.com",
        description: "Build internal tools and business applications quickly with pre-built components.",
        pricing: "Free plan available, Team plan at $10/user/month",
        features: ["Custom Components", "Database Integration", "API Connection", "Workflows"],
        rating: 4.8,
        users: "500K+",
        launched: "2017",
        tags: ["Internal Tools", "Business Apps", "Low-Code", "Database"]
    },
    {
        name: "Gemini",
        category: "AI Writing",
        link: "https://gemini.google.com",
        description: "Google's multimodal AI model for text, code, and image understanding.",
        pricing: "Free tier available, Advanced features at $10/month",
        features: ["Multimodal AI", "Code Generation", "Image Analysis", "Creative Writing"],
        rating: 4.7,
        users: "10M+",
        launched: "2024",
        tags: ["AI", "Multimodal", "Google", "Analysis"]
    },
    {
        name: "Perplexity AI",
        category: "AI Writing",
        link: "https://www.perplexity.ai",
        description: "AI-powered search engine and research assistant with real-time information.",
        pricing: "Free tier available, Pro plan at $20/month",
        features: ["Real-time Search", "Citation Support", "Custom Sources", "Chat Interface"],
        rating: 4.6,
        users: "5M+",
        launched: "2022",
        tags: ["AI", "Search", "Research", "Information"]
    },
    {
        name: "Otter.ai",
        category: "AI Audio Creation",
        link: "https://otter.ai",
        description: "AI-powered meeting transcription and note-taking assistant.",
        pricing: "Free plan available, Pro plan at $16.99/month",
        features: ["Live Transcription", "Meeting Notes", "Search", "Collaboration"],
        rating: 4.7,
        users: "1M+",
        launched: "2016",
        tags: ["Transcription", "Meetings", "Notes", "AI"]
    },
    {
        name: "Elevenlabs",
        category: "AI Audio Creation",
        link: "https://elevenlabs.io",
        description: "AI voice generation platform with high-quality, natural-sounding voices.",
        pricing: "Free tier available, Pro plan at $22/month",
        features: ["Voice Cloning", "Text to Speech", "Voice Design", "API Access"],
        rating: 4.8,
        users: "800K+",
        launched: "2022",
        tags: ["Voice AI", "Text to Speech", "Voice Cloning", "Audio"]
    },
    {
        name: "Pika Labs",
        category: "AI Video Creation",
        link: "https://www.pika.art",
        description: "AI video generation platform for creating and editing videos from text.",
        pricing: "Waitlist/Beta access",
        features: ["Text to Video", "Video Editing", "Style Transfer", "Animation"],
        rating: 4.6,
        users: "100K+",
        launched: "2023",
        tags: ["AI", "Video Generation", "Animation", "Creative"]
    },
    {
        name: "HeyGen",
        category: "AI Video Creation",
        link: "https://www.heygen.com",
        description: "AI video creation platform for professional videos with virtual presenters.",
        pricing: "Starts at $29/month",
        features: ["AI Presenters", "Voice Synthesis", "Translation", "Templates"],
        rating: 4.7,
        users: "300K+",
        launched: "2022",
        tags: ["Video Creation", "AI Avatars", "Business", "Marketing"]
    },
    {
        name: "Tableau",
        category: "AI Data Analysis",
        link: "https://www.tableau.com",
        description: "Data visualization and business intelligence software with AI capabilities.",
        pricing: "Teams plan at $70/user/month",
        features: ["Data Visualization", "Analytics", "AI Insights", "Dashboards"],
        rating: 4.8,
        users: "1M+",
        launched: "2003",
        tags: ["Data Analysis", "Visualization", "Business Intelligence", "Analytics"]
    },
    {
        name: "Power BI",
        category: "AI Data Analysis",
        link: "https://powerbi.microsoft.com",
        description: "Microsoft's business analytics service with AI-powered insights.",
        pricing: "Pro at $10/user/month",
        features: ["Data Modeling", "AI Insights", "Dashboards", "Integration"],
        rating: 4.7,
        users: "5M+",
        launched: "2011",
        tags: ["Business Intelligence", "Analytics", "Microsoft", "Data"]
    },
    {
        name: "FlutterFlow",
        category: "No-Code Mobile Apps",
        link: "https://flutterflow.io",
        description: "Visual development platform for building Flutter apps without code.",
        pricing: "Free plan available, Pro at $30/month",
        features: ["Visual Builder", "Flutter Export", "Database", "Authentication"],
        rating: 4.6,
        users: "200K+",
        launched: "2020",
        tags: ["Flutter", "Mobile Apps", "No-Code", "Visual Development"]
    },
    {
        name: "AppMaster",
        category: "No-Code Mobile Apps",
        link: "https://appmaster.io",
        description: "No-code platform for creating backend, web, and mobile applications.",
        pricing: "Free plan available, Business at $47/month",
        features: ["Backend Generation", "Web Apps", "Mobile Apps", "Database Design"],
        rating: 4.5,
        users: "100K+",
        launched: "2020",
        tags: ["Backend", "Web Apps", "Mobile Apps", "No-Code"]
    },
    {
        name: "n8n",
        category: "No-Code Automation",
        link: "https://n8n.io",
        description: "Open-source workflow automation tool with a fair-code license.",
        pricing: "Self-hosted free, Cloud from $20/month",
        features: ["Workflow Automation", "API Integration", "Self-hosting", "Custom Functions"],
        rating: 4.6,
        users: "200K+",
        launched: "2019",
        tags: ["Automation", "Workflow", "Open Source", "Integration"]
    },
    {
        name: "AutoGPT",
        category: "AI Code Generation",
        link: "https://github.com/Significant-Gravitas/Auto-GPT",
        description: "Open-source AI agent that chains together LLM calls to accomplish tasks.",
        pricing: "Open Source/Free",
        features: ["Autonomous AI", "Task Automation", "Code Generation", "Problem Solving"],
        rating: 4.5,
        users: "1M+",
        launched: "2023",
        tags: ["AI", "Automation", "Code Generation", "Open Source"]
    },
    {
        name: "Softr",
        category: "No-Code Web Development",
        link: "https://www.softr.io",
        description: "Build web apps and portals from Airtable and Google Sheets without coding.",
        pricing: "Free plan available, Business at $29/month",
        features: ["Database Apps", "Member Portals", "Custom Domains", "White Label"],
        rating: 4.7,
        users: "150K+",
        launched: "2019",
        tags: ["Web Apps", "Airtable", "No-Code", "Portals"]
    },
    {
        name: "Voiceflow",
        category: "No-Code Automation",
        link: "https://www.voiceflow.com",
        description: "Design, prototype and build conversational AI assistants without code.",
        pricing: "Free plan available, Pro at $39/month",
        features: ["Conversation Design", "AI Integration", "Analytics", "Multi-platform"],
        rating: 4.6,
        users: "100K+",
        launched: "2018",
        tags: ["Chatbots", "Voice Apps", "Conversation Design", "AI"]
    },
    {
        name: "Replicate",
        category: "AI Image Creation",
        link: "https://replicate.com",
        description: "Platform for running AI models in the cloud with simple API access.",
        pricing: "Pay-per-use, starting at $0.0002/second",
        features: ["Model Deployment", "API Access", "Custom Training", "Cloud Hosting"],
        rating: 4.7,
        users: "300K+",
        launched: "2021",
        tags: ["AI Models", "Cloud Computing", "API", "Machine Learning"]
    },
    {
        name: "Mintlify",
        category: "AI Writing",
        link: "https://mintlify.com",
        description: "AI-powered documentation generator and writer for developers.",
        pricing: "Free plan available, Team plan at $24/month",
        features: ["Doc Generation", "AI Writing", "Code Documentation", "Team Collaboration"],
        rating: 4.5,
        users: "50K+",
        launched: "2022",
        tags: ["Documentation", "Developer Tools", "AI Writing", "Technical Writing"]
    },
    {
        name: "Plasmic",
        category: "No-Code Web Development",
        link: "https://www.plasmic.app",
        description: "Visual builder for React applications and websites.",
        pricing: "Free plan available, Pro at $49/month",
        features: ["React Components", "Visual Editor", "Code Export", "CMS Integration"],
        rating: 4.6,
        users: "80K+",
        launched: "2020",
        tags: ["React", "Web Development", "Visual Builder", "Components"]
    },
    {
        name: "Riku.ai",
        category: "AI Code Generation",
        link: "https://riku.ai",
        description: "Build AI models and integrate them into your applications without coding.",
        pricing: "Free plan available, Pro at $99/month",
        features: ["Model Training", "API Generation", "No-Code AI", "Integration"],
        rating: 4.4,
        users: "30K+",
        launched: "2022",
        tags: ["AI Models", "No-Code", "API", "Machine Learning"]
    },
    {
        name: "Speechify",
        category: "AI Audio Creation",
        link: "https://speechify.com",
        description: "Convert text to natural-sounding speech with AI voices.",
        pricing: "Free plan available, Premium at $139/year",
        features: ["Text to Speech", "Document Scanning", "Multiple Voices", "Mobile Apps"],
        rating: 4.7,
        users: "5M+",
        launched: "2017",
        tags: ["Text to Speech", "Accessibility", "Audio", "Productivity"]
    },
    {
        name: "Loom",
        category: "AI Video Creation",
        link: "https://www.loom.com",
        description: "Video messaging platform with AI-powered features for better communication.",
        pricing: "Free plan available, Business at $12.50/month",
        features: ["Screen Recording", "AI Summaries", "Video Editing", "Analytics"],
        rating: 4.8,
        users: "20M+",
        launched: "2015",
        tags: ["Video Messaging", "Screen Recording", "Communication", "AI"]
    },
    {
        name: "Mendix",
        category: "No-Code Web Development",
        link: "https://www.mendix.com",
        description: "Low-code platform for building enterprise-grade applications.",
        pricing: "Free plan available, Enterprise pricing",
        features: ["Visual Development", "Enterprise Integration", "Mobile Apps", "Cloud Deployment"],
        rating: 4.5,
        users: "250K+",
        launched: "2005",
        tags: ["Enterprise", "Low-Code", "Applications", "Cloud"]
    },
    {
        name: "Metabase",
        category: "AI Data Analysis",
        link: "https://www.metabase.com",
        description: "Open-source business intelligence tool with AI capabilities.",
        pricing: "Open source free, Cloud from $85/month",
        features: ["Data Visualization", "SQL Queries", "Dashboards", "Sharing"],
        rating: 4.6,
        users: "500K+",
        launched: "2014",
        tags: ["Business Intelligence", "Analytics", "Open Source", "Data"]
    },
    {
        name: "OutSystems",
        category: "No-Code Web Development",
        link: "https://www.outsystems.com",
        description: "Enterprise low-code platform for building web and mobile applications.",
        pricing: "Free plan available, Enterprise pricing",
        features: ["Visual Development", "Enterprise Apps", "Mobile Development", "Security"],
        rating: 4.6,
        users: "350K+",
        launched: "2001",
        tags: ["Enterprise", "Low-Code", "Applications", "Mobile"]
    },
    {
        name: "Hugging Face",
        category: "AI Code Generation",
        link: "https://huggingface.co",
        description: "Platform for building, training and deploying ML models with thousands of pre-trained models.",
        pricing: "Free for open source, Enterprise pricing available",
        features: ["Model Hub", "Training", "Deployment", "Community"],
        rating: 4.8,
        users: "2M+",
        launched: "2016",
        tags: ["Machine Learning", "AI Models", "NLP", "Open Source"]
    },
    {
        name: "Typeform",
        category: "No-Code Web Development",
        link: "https://www.typeform.com",
        description: "Create engaging forms, surveys, and quizzes with a beautiful interface.",
        pricing: "Free plan available, Business at $25/month",
        features: ["Form Builder", "Logic Jumps", "Analytics", "Integration"],
        rating: 4.7,
        users: "10M+",
        launched: "2012",
        tags: ["Forms", "Surveys", "Design", "No-Code"]
    },
    {
        name: "Teachable Machine",
        category: "AI Code Generation",
        link: "https://teachablemachine.withgoogle.com",
        description: "Train machine learning models without code using Google's visual tool.",
        pricing: "Free",
        features: ["Image Training", "Audio Training", "Pose Detection", "Export Models"],
        rating: 4.5,
        users: "1M+",
        launched: "2017",
        tags: ["Machine Learning", "No-Code", "AI Training", "Google"]
    },
    {
        name: "Roboflow",
        category: "AI Image Creation",
        link: "https://roboflow.com",
        description: "Platform for computer vision model training and deployment.",
        pricing: "Free plan available, Team at $995/month",
        features: ["Image Annotation", "Model Training", "Deployment", "API"],
        rating: 4.7,
        users: "200K+",
        launched: "2019",
        tags: ["Computer Vision", "AI", "Machine Learning", "Image Processing"]
    },
    {
        name: "Carrd",
        category: "No-Code Web Development",
        link: "https://carrd.co",
        description: "Build simple, responsive one-page websites without coding.",
        pricing: "Free plan available, Pro at $19/year",
        features: ["One-page Sites", "Responsive Design", "Forms", "Custom Domains"],
        rating: 4.8,
        users: "2M+",
        launched: "2016",
        tags: ["Websites", "Landing Pages", "No-Code", "Simple"]
    },
    {
        name: "Coda",
        category: "No-Code Web Development",
        link: "https://coda.io",
        description: "All-in-one doc that combines documents, spreadsheets, and workflows.",
        pricing: "Free plan available, Team at $10/user/month",
        features: ["Documents", "Tables", "Automation", "Integration"],
        rating: 4.7,
        users: "1M+",
        launched: "2017",
        tags: ["Documents", "Collaboration", "Automation", "No-Code"]
    },
    {
        name: "Gradio",
        category: "AI Code Generation",
        link: "https://gradio.app",
        description: "Create UIs for machine learning models with simple Python code.",
        pricing: "Open Source/Free",
        features: ["UI Generation", "Model Demo", "API Creation", "Sharing"],
        rating: 4.6,
        users: "300K+",
        launched: "2019",
        tags: ["Machine Learning", "UI", "Python", "Open Source"]
    },
    {
        name: "Streamlit",
        category: "No-Code Web Development",
        link: "https://streamlit.io",
        description: "Turn data scripts into shareable web apps in minutes.",
        pricing: "Open Source/Free, Cloud from $250/month",
        features: ["Data Apps", "Python", "Visualization", "Deployment"],
        rating: 4.8,
        users: "1.5M+",
        launched: "2019",
        tags: ["Data Apps", "Python", "Web Apps", "Data Science"]
    },
    {
        name: "Labelbox",
        category: "AI Data Analysis",
        link: "https://labelbox.com",
        description: "Platform for creating and managing training data for AI applications.",
        pricing: "Enterprise pricing",
        features: ["Data Labeling", "Model Training", "Workflow", "API"],
        rating: 4.5,
        users: "200K+",
        launched: "2018",
        tags: ["Machine Learning", "Data Labeling", "AI", "Training Data"]
    },
    {
        name: "Wordpress",
        category: "No-Code Web Development",
        link: "https://wordpress.org",
        description: "World's most popular CMS for building websites, blogs, and e-commerce stores.",
        pricing: "Free open-source, hosting from $4/month",
        features: ["Page Builder", "Plugins", "Themes", "E-commerce"],
        rating: 4.7,
        users: "500M+",
        launched: "2003",
        tags: ["CMS", "Websites", "Blogging", "E-commerce"]
    },
    {
        name: "Shopify",
        category: "No-Code Web Development",
        link: "https://www.shopify.com",
        description: "E-commerce platform for building online stores with no coding required.",
        pricing: "Basic plan at $39/month",
        features: ["Online Store", "POS", "Marketing Tools", "Analytics"],
        rating: 4.8,
        users: "2M+",
        launched: "2006",
        tags: ["E-commerce", "Online Store", "Business", "No-Code"]
    },
    {
        name: "Squarespace",
        category: "No-Code Web Development",
        link: "https://www.squarespace.com",
        description: "Website builder and hosting platform known for beautiful templates.",
        pricing: "Personal plan at $16/month",
        features: ["Templates", "E-commerce", "Marketing", "Analytics"],
        rating: 4.7,
        users: "4M+",
        launched: "2004",
        tags: ["Website Builder", "Templates", "E-commerce", "Design"]
    },
    {
        name: "Whisper",
        category: "AI Audio Creation",
        link: "https://openai.com/research/whisper",
        description: "OpenAI's speech recognition system for transcription and translation.",
        pricing: "Open Source/Free",
        features: ["Speech Recognition", "Translation", "Multilingual", "API"],
        rating: 4.7,
        users: "1M+",
        launched: "2022",
        tags: ["Speech Recognition", "AI", "Translation", "Open Source"]
    },
    {
        name: "Dubb",
        category: "AI Video Creation",
        link: "https://dubb.com",
        description: "Video communication platform with AI-powered features for businesses.",
        pricing: "Starter at $32/month",
        features: ["Video Creation", "Screen Recording", "Analytics", "Integration"],
        rating: 4.5,
        users: "100K+",
        launched: "2020",
        tags: ["Video", "Communication", "Business", "AI"]
    },
    {
        name: "Dora",
        category: "AI Data Analysis",
        link: "https://www.dora.run",
        description: "AI-powered data analysis and visualization platform.",
        pricing: "Free beta, Pro plan coming soon",
        features: ["Data Analysis", "Visualization", "AI Insights", "Collaboration"],
        rating: 4.4,
        users: "50K+",
        launched: "2023",
        tags: ["Data Analysis", "AI", "Visualization", "Business"]
    },
    {
        name: "Appgyver",
        category: "No-Code Mobile Apps",
        link: "https://www.appgyver.com",
        description: "Professional no-code platform for building mobile and web apps.",
        pricing: "Free for personal use",
        features: ["Visual Development", "Data Integration", "Logic Builder", "Responsive"],
        rating: 4.5,
        users: "300K+",
        launched: "2010",
        tags: ["Mobile Apps", "Web Apps", "No-Code", "Development"]
    },
    {
        name: "Bardeen",
        category: "No-Code Automation",
        link: "https://www.bardeen.ai",
        description: "AI-powered automation platform for browser-based tasks.",
        pricing: "Free plan available, Pro at $15/month",
        features: ["Browser Automation", "AI Assistant", "Workflows", "Chrome Extension"],
        rating: 4.6,
        users: "100K+",
        launched: "2020",
        tags: ["Automation", "AI", "Productivity", "Browser"]
    },
    {
        name: "Mem.ai",
        category: "AI Writing",
        link: "https://mem.ai",
        description: "AI-powered workspace that helps you organize and create content.",
        pricing: "Free plan available, Pro at $20/month",
        features: ["Note Taking", "AI Writing", "Knowledge Base", "Collaboration"],
        rating: 4.7,
        users: "200K+",
        launched: "2021",
        tags: ["AI", "Notes", "Productivity", "Writing"]
    },
    {
        name: "Gamma",
        category: "AI Writing",
        link: "https://gamma.app",
        description: "AI-powered presentation and document creation platform.",
        pricing: "Free plan available, Pro at $15/month",
        features: ["Presentations", "Documents", "AI Generation", "Templates"],
        rating: 4.8,
        users: "500K+",
        launched: "2022",
        tags: ["Presentations", "AI", "Documents", "Design"]
    },
    {
        name: "Qdrant",
        category: "AI Code Generation",
        link: "https://qdrant.tech",
        description: "Vector similarity search engine for AI applications.",
        pricing: "Open Source/Free, Cloud from $30/month",
        features: ["Vector Search", "Cloud API", "Scalable", "Fast"],
        rating: 4.6,
        users: "50K+",
        launched: "2021",
        tags: ["Vector DB", "AI", "Search", "Open Source"]
    },
    {
        name: "Miro",
        category: "No-Code Web Development",
        link: "https://miro.com",
        description: "Collaborative online whiteboard platform with AI-powered features for teams.",
        pricing: "Free plan available, Business at $8/user/month",
        features: ["Whiteboard", "AI Assistant", "Templates", "Real-time Collaboration"],
        rating: 4.8,
        users: "50M+",
        launched: "2011",
        tags: ["Collaboration", "Whiteboard", "AI", "Teams"]
    },
    {
        name: "AssemblyAI",
        category: "AI Audio Creation",
        link: "https://www.assemblyai.com",
        description: "AI-powered speech recognition and audio intelligence platform.",
        pricing: "Pay-as-you-go, starting at $0.0001/second",
        features: ["Speech Recognition", "Audio Intelligence", "Speaker Detection", "Sentiment Analysis"],
        rating: 4.7,
        users: "200K+",
        launched: "2018",
        tags: ["Speech Recognition", "Audio", "AI", "API"]
    },
    {
        name: "Character.ai",
        category: "AI Writing",
        link: "https://character.ai",
        description: "Create and interact with AI characters for conversation, roleplay, and creative writing.",
        pricing: "Free plan available, Plus at $9.99/month",
        features: ["Character Creation", "Conversation", "Roleplay", "Creative Writing"],
        rating: 4.7,
        users: "20M+",
        launched: "2022",
        tags: ["AI Characters", "Conversation", "Creative Writing", "Entertainment"]
    },
    {
        name: "Tome",
        category: "AI Writing",
        link: "https://tome.app",
        description: "AI-powered storytelling and presentation platform that creates beautiful narratives.",
        pricing: "Free plan available, Pro at $20/month",
        features: ["Story Generation", "Visual Narratives", "AI Assistance", "Collaboration"],
        rating: 4.7,
        users: "1M+",
        launched: "2022",
        tags: ["Storytelling", "Presentations", "AI", "Visual"]
    },
    {
        name: "Pictory",
        category: "AI Video Creation",
        link: "https://pictory.ai",
        description: "AI video creation platform that turns long-form content into engaging short videos.",
        pricing: "Starter at $19/month",
        features: ["Video Summarization", "Auto Captions", "Content Extraction", "Social Media Format"],
        rating: 4.6,
        users: "100K+",
        launched: "2021",
        tags: ["Video Creation", "Content", "AI", "Social Media"]
    }
].sort((a, b) => a.name.localeCompare(b.name));

// DOM Elements
const toolsContainer = document.getElementById('toolsContainer');
const searchInput = document.getElementById('searchInput');
const categorySelect = document.getElementById('categorySelect');
const toolModal = document.getElementById('toolModal');
const modalClose = document.getElementById('modalClose');

// Tool Card Creation
const createToolCard = (tool) => {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.innerHTML = `
        <h2><a href="${tool.link}" target="_blank">${tool.name}</a></h2>
        <p class="category">${tool.category}</p>
    `;
    
    card.addEventListener('click', () => showToolDetails(tool));
    
    return card;
};

// Modal Management
const showToolDetails = (tool) => {
    document.getElementById('modalTitle').textContent = tool.name;
    document.getElementById('modalDescription').textContent = tool.description;
    document.getElementById('modalPricing').textContent = `Pricing: ${tool.pricing}`;
    document.getElementById('modalFeatures').innerHTML = `<strong>Features:</strong> ${tool.features.join(', ')}`;
    
    document.getElementById('modalTags').innerHTML = tool.tags.map(tag => 
        `<span class="tool-tag">${tag}</span>`
    ).join('');
    
    document.getElementById('modalRating').textContent = `Rating: ${tool.rating}/5.0`;
    document.getElementById('modalUsers').textContent = `Users: ${tool.users}`;
    document.getElementById('modalLaunched').textContent = `Launched: ${tool.launched}`;
    
    toolModal.classList.add('active');
};

const closeModal = () => {
    toolModal.classList.remove('active');
};

// Filter Tools
let currentFilteredTools = [...tools];

const filterTools = () => {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categorySelect.value;
    
    currentFilteredTools = tools.filter(tool => {
        const matchesSearch = tool.name.toLowerCase().includes(searchTerm) ||
                            tool.category.toLowerCase().includes(searchTerm) ||
                            tool.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    
    displayTools(currentFilteredTools);
};

// Display Tools
const displayTools = (toolsToDisplay) => {
    toolsContainer.innerHTML = '';
    toolsToDisplay.forEach(tool => {
        toolsContainer.appendChild(createToolCard(tool));
    });
};

// Event Listeners
searchInput.addEventListener('input', filterTools);
categorySelect.addEventListener('change', filterTools);
modalClose.addEventListener('click', closeModal);
toolModal.addEventListener('click', (e) => {
    if (e.target === toolModal) closeModal();
});

// Initialize
displayTools(tools); 