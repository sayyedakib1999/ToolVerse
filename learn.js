// Tutorial data
const tutorials = [
    {
        id: 1,
        toolName: "ChatGPT",
        category: "AI Writing",
        title: "Getting Started with ChatGPT",
        difficulty: "beginner",
        duration: "15 mins",
        preview: "Learn the basics of using ChatGPT for content creation and problem-solving.",
        content: `
            <h3>Introduction to ChatGPT</h3>
            <p>ChatGPT is an AI language model that can help you with various tasks like writing, analysis, and problem-solving. This tutorial will show you how to get the most out of it.</p>

            <h3>Basic Usage</h3>
            <ol>
                <li>Visit <a href="https://chat.openai.com" target="_blank">chat.openai.com</a></li>
                <li>Sign up or log in to your account</li>
                <li>Start a new chat by clicking the "New Chat" button</li>
                <li>Type your question or prompt in the input field</li>
                <li>Press Enter or click the send button</li>
            </ol>

            <h3>Best Practices</h3>
            <ul>
                <li>Be specific in your prompts</li>
                <li>Provide context when needed</li>
                <li>Break down complex tasks into smaller parts</li>
                <li>Use system-level prompts for consistent outputs</li>
            </ul>

            <h3>Example Prompts</h3>
            <pre><code>// Writing assistance
"Write a blog post about [topic] in a [tone] tone"

// Code help
"Explain this code: [paste code]"

// Analysis
"Analyze the pros and cons of [topic]"</code></pre>
        `,
        resources: [
            {
                title: "Official ChatGPT Documentation",
                url: "https://help.openai.com/en/articles/6783457-chatgpt-guide",
                type: "documentation"
            },
            {
                title: "Prompt Engineering Guide",
                url: "https://www.promptingguide.ai",
                type: "guide"
            }
        ]
    },
    {
        id: 2,
        toolName: "Midjourney",
        category: "AI Image Creation",
        title: "Creating Amazing Art with Midjourney",
        difficulty: "intermediate",
        duration: "25 mins",
        preview: "Master the art of generating stunning images using Midjourney's AI image generation.",
        content: `
            <h3>Getting Started with Midjourney</h3>
            <p>Midjourney is an AI art generation tool that creates stunning images from text descriptions. This guide will help you create amazing artwork.</p>

            <h3>Basic Commands</h3>
            <pre><code>/imagine [your prompt] - Generate an image
/info - View your subscription info
/fast - Switch to fast mode
/relax - Switch to relax mode</code></pre>

            <h3>Prompt Structure</h3>
            <p>A good Midjourney prompt follows this structure:</p>
            <pre><code>[Subject], [Medium], [Style], [Lighting], [Additional Details]</code></pre>

            <h3>Example Prompts</h3>
            <ul>
                <li>A mystical forest at sunset, digital art, fantasy style, volumetric lighting --ar 16:9</li>
                <li>Portrait of a cyberpunk samurai, oil painting, detailed, neon lighting --v 5</li>
            </ul>

            <h3>Parameters</h3>
            <ul>
                <li>--v 5 : Use version 5</li>
                <li>--ar : Aspect ratio</li>
                <li>--q : Quality (draft, default, high)</li>
                <li>--s : Stylize (0-1000)</li>
            </ul>
        `,
        resources: [
            {
                title: "Official Midjourney Documentation",
                url: "https://docs.midjourney.com",
                type: "documentation"
            },
            {
                title: "Midjourney Prompt Guide",
                url: "https://www.midjourney.com/prompt-guide",
                type: "guide"
            }
        ]
    },
    {
        id: 3,
        toolName: "DALL-E",
        category: "AI Image Creation",
        title: "Creating Images with DALL-E",
        difficulty: "beginner",
        duration: "20 mins",
        preview: "Learn how to generate high-quality images using OpenAI's DALL-E AI model.",
        content: `
            <h3>Introduction to DALL-E</h3>
            <p>DALL-E is OpenAI's advanced AI image generation model that can create images from text descriptions. This tutorial will help you get started with creating amazing visuals.</p>

            <h3>Getting Started</h3>
            <ol>
                <li>Visit <a href="https://labs.openai.com" target="_blank">OpenAI Labs</a></li>
                <li>Sign in with your OpenAI account</li>
                <li>Navigate to the DALL-E interface</li>
                <li>Start creating with the text input field</li>
            </ol>

            <h3>Prompt Engineering Tips</h3>
            <ul>
                <li>Be specific about style and medium</li>
                <li>Include details about lighting and composition</li>
                <li>Specify artistic style when relevant</li>
                <li>Use descriptive adjectives for better results</li>
            </ul>

            <h3>Example Prompts</h3>
            <pre><code>"A serene Japanese garden at sunset, watercolor style, soft lighting, cherry blossoms"

"A futuristic cityscape with flying cars, neon lights, cyberpunk style"

"A minimalist logo design for a tech startup, clean lines, modern aesthetic"</code></pre>
        `,
        resources: [
            {
                title: "DALL-E Documentation",
                url: "https://platform.openai.com/docs/guides/images",
                type: "documentation"
            },
            {
                title: "DALL-E Prompt Guide",
                url: "https://help.openai.com/en/articles/6654000-dall-e-3-tips",
                type: "guide"
            }
        ]
    },
    {
        id: 4,
        toolName: "Bubble",
        category: "No-Code Web Development",
        title: "Building Web Apps with Bubble",
        difficulty: "intermediate",
        duration: "45 mins",
        preview: "Master the basics of creating web applications without code using Bubble's visual development platform.",
        content: `
            <h3>Getting Started with Bubble</h3>
            <p>Bubble is a powerful no-code platform that lets you build web applications visually. This tutorial covers the essential concepts and workflows.</p>

            <h3>Core Concepts</h3>
            <ul>
                <li>Pages and Navigation</li>
                <li>Database and Data Types</li>
                <li>Workflows and Actions</li>
                <li>User Authentication</li>
                <li>API Integration</li>
            </ul>

            <h3>Building Your First App</h3>
            <ol>
                <li>Create a new project</li>
                <li>Design your database structure</li>
                <li>Build your user interface</li>
                <li>Set up workflows</li>
                <li>Test and deploy</li>
            </ol>

            <h3>Best Practices</h3>
            <ul>
                <li>Plan your data structure carefully</li>
                <li>Use reusable elements</li>
                <li>Implement proper security rules</li>
                <li>Optimize for performance</li>
            </ul>
        `,
        resources: [
            {
                title: "Bubble Documentation",
                url: "https://bubble.io/docs",
                type: "documentation"
            },
            {
                title: "Bubble Academy",
                url: "https://bubble.io/academy",
                type: "guide"
            }
        ]
    },
    {
        id: 5,
        toolName: "Runway",
        category: "AI Video Creation",
        title: "AI Video Generation with Runway",
        difficulty: "intermediate",
        duration: "30 mins",
        preview: "Learn how to create stunning AI-generated videos using Runway's powerful tools.",
        content: `
            <h3>Introduction to Runway</h3>
            <p>Runway is a creative AI suite for video generation and editing. This tutorial covers the main features and workflows.</p>

            <h3>Key Features</h3>
            <ul>
                <li>Text-to-Video Generation</li>
                <li>Video Style Transfer</li>
                <li>Object Removal</li>
                <li>Background Replacement</li>
                <li>Motion Tracking</li>
            </ul>

            <h3>Creating Your First AI Video</h3>
            <ol>
                <li>Set up your project</li>
                <li>Choose your generation model</li>
                <li>Write effective prompts</li>
                <li>Adjust generation settings</li>
                <li>Export and share</li>
            </ol>

            <h3>Advanced Techniques</h3>
            <pre><code>// Example prompt structure
"Create a cinematic scene of [subject] in [style] with [mood]"

// Style transfer workflow
1. Import base video
2. Select style reference
3. Adjust strength and settings
4. Generate and refine</code></pre>
        `,
        resources: [
            {
                title: "Runway Documentation",
                url: "https://docs.runwayml.com",
                type: "documentation"
            },
            {
                title: "Runway Tutorials",
                url: "https://runwayml.com/tutorials",
                type: "guide"
            }
        ]
    },
    {
        id: 6,
        toolName: "Zapier",
        category: "No-Code Automation",
        title: "Automating Workflows with Zapier",
        difficulty: "beginner",
        duration: "25 mins",
        preview: "Learn how to automate tasks and connect your favorite apps using Zapier's no-code automation platform.",
        content: `
            <h3>Getting Started with Zapier</h3>
            <p>Zapier helps you automate repetitive tasks by connecting your favorite apps and services. This tutorial covers the basics of creating automated workflows.</p>

            <h3>Core Concepts</h3>
            <ul>
                <li>Zaps (Automated workflows)</li>
                <li>Triggers and Actions</li>
                <li>Apps and Integrations</li>
                <li>Data Mapping</li>
                <li>Testing and Monitoring</li>
            </ul>

            <h3>Creating Your First Zap</h3>
            <ol>
                <li>Choose your trigger app</li>
                <li>Select the trigger event</li>
                <li>Choose your action app</li>
                <li>Configure the action</li>
                <li>Test and activate</li>
            </ol>

            <h3>Common Use Cases</h3>
            <ul>
                <li>Email to CRM contact creation</li>
                <li>Form submission to spreadsheet</li>
                <li>Social media post scheduling</li>
                <li>File backup automation</li>
            </ul>
        `,
        resources: [
            {
                title: "Zapier Documentation",
                url: "https://zapier.com/help",
                type: "documentation"
            },
            {
                title: "Zapier Templates",
                url: "https://zapier.com/apps/templates",
                type: "guide"
            }
        ]
    },
    {
        id: 7,
        toolName: "Claude",
        category: "AI Writing",
        title: "Advanced Writing with Claude",
        difficulty: "intermediate",
        duration: "20 mins",
        preview: "Learn how to leverage Claude's advanced capabilities for writing, analysis, and research.",
        content: `
            <h3>Introduction to Claude</h3>
            <p>Claude is an advanced AI assistant that excels at writing, analysis, and research. This tutorial covers its unique capabilities and best practices.</p>

            <h3>Key Features</h3>
            <ul>
                <li>Long-form content generation</li>
                <li>Academic research assistance</li>
                <li>Code analysis and explanation</li>
                <li>Data analysis and interpretation</li>
            </ul>

            <h3>Best Practices</h3>
            <ul>
                <li>Provide clear context and constraints</li>
                <li>Use specific instructions for tone and style</li>
                <li>Break down complex requests</li>
                <li>Request citations when needed</li>
            </ul>

            <h3>Example Use Cases</h3>
            <pre><code>// Research assistance
"Analyze this research paper and summarize key findings"

// Content creation
"Write a detailed blog post about [topic] with proper citations"

// Code review
"Review this code and suggest improvements for [specific aspect]"</code></pre>
        `,
        resources: [
            {
                title: "Claude Documentation",
                url: "https://docs.anthropic.com/claude",
                type: "documentation"
            },
            {
                title: "Claude Best Practices",
                url: "https://www.anthropic.com/index/prompting-guide",
                type: "guide"
            }
        ]
    },
    {
        id: 8,
        toolName: "GitHub Copilot",
        category: "AI Code Generation",
        title: "Coding with GitHub Copilot",
        difficulty: "intermediate",
        duration: "30 mins",
        preview: "Master AI-powered coding assistance with GitHub Copilot for faster and more efficient development.",
        content: `
            <h3>Getting Started with GitHub Copilot</h3>
            <p>GitHub Copilot is an AI pair programmer that helps you write better code faster. Learn how to effectively use it in your development workflow.</p>

            <h3>Setup and Installation</h3>
            <ol>
                <li>Install the GitHub Copilot extension</li>
                <li>Sign in with your GitHub account</li>
                <li>Choose your preferred IDE</li>
                <li>Start coding with AI assistance</li>
            </ol>

            <h3>Key Features</h3>
            <ul>
                <li>Real-time code suggestions</li>
                <li>Natural language to code conversion</li>
                <li>Multi-language support</li>
                <li>Context-aware completions</li>
            </ul>

            <h3>Best Practices</h3>
            <ul>
                <li>Write clear comments for better suggestions</li>
                <li>Review generated code carefully</li>
                <li>Use specific function names</li>
                <li>Provide context in comments</li>
            </ul>
        `,
        resources: [
            {
                title: "GitHub Copilot Docs",
                url: "https://docs.github.com/en/copilot",
                type: "documentation"
            },
            {
                title: "Copilot Best Practices",
                url: "https://github.com/features/copilot",
                type: "guide"
            }
        ]
    },
    {
        id: 9,
        toolName: "Webflow",
        category: "No-Code Web Development",
        title: "Building Websites with Webflow",
        difficulty: "beginner",
        duration: "40 mins",
        preview: "Create professional websites without code using Webflow's visual development platform.",
        content: `
            <h3>Introduction to Webflow</h3>
            <p>Webflow is a powerful visual web development platform that lets you design, build, and launch websites without coding.</p>

            <h3>Core Concepts</h3>
            <ul>
                <li>Visual Designer</li>
                <li>CMS and Collections</li>
                <li>Interactions and Animations</li>
                <li>Responsive Design</li>
                <li>E-commerce Features</li>
            </ul>

            <h3>Building Your First Site</h3>
            <ol>
                <li>Choose a template or start from scratch</li>
                <li>Design your layout using the visual editor</li>
                <li>Add content and style elements</li>
                <li>Set up interactions and animations</li>
                <li>Configure CMS if needed</li>
                <li>Publish your site</li>
            </ol>

            <h3>Best Practices</h3>
            <ul>
                <li>Plan your site structure first</li>
                <li>Use classes for reusable styles</li>
                <li>Optimize for mobile devices</li>
                <li>Follow web design principles</li>
            </ul>
        `,
        resources: [
            {
                title: "Webflow University",
                url: "https://university.webflow.com",
                type: "documentation"
            },
            {
                title: "Webflow Templates",
                url: "https://webflow.com/templates",
                type: "guide"
            }
        ]
    },
    {
        id: 10,
        toolName: "Make (Integromat)",
        category: "No-Code Automation",
        title: "Workflow Automation with Make",
        difficulty: "intermediate",
        duration: "35 mins",
        preview: "Create complex automated workflows using Make's visual automation platform.",
        content: `
            <h3>Getting Started with Make</h3>
            <p>Make (formerly Integromat) is a powerful automation platform that connects your apps and services to create complex workflows.</p>

            <h3>Core Concepts</h3>
            <ul>
                <li>Scenarios (Automated workflows)</li>
                <li>Modules and Connections</li>
                <li>Data Mapping</li>
                <li>Error Handling</li>
                <li>Scheduling and Triggers</li>
            </ul>

            <h3>Creating Your First Scenario</h3>
            <ol>
                <li>Choose your trigger app</li>
                <li>Configure trigger settings</li>
                <li>Add action modules</li>
                <li>Map data between modules</li>
                <li>Test and activate</li>
            </ol>

            <h3>Advanced Features</h3>
            <ul>
                <li>Custom functions and formulas</li>
                <li>Data transformation</li>
                <li>Conditional logic</li>
                <li>Error handling and retries</li>
            </ul>
        `,
        resources: [
            {
                title: "Make Documentation",
                url: "https://www.make.com/en/help",
                type: "documentation"
            },
            {
                title: "Make Templates",
                url: "https://www.make.com/en/templates",
                type: "guide"
            }
        ]
    },
    {
        id: 11,
        toolName: "Synthesia",
        category: "AI Video Creation",
        title: "Creating AI Videos with Synthesia",
        difficulty: "beginner",
        duration: "25 mins",
        preview: "Learn how to create professional AI-powered videos using Synthesia's platform.",
        content: `
            <h3>Introduction to Synthesia</h3>
            <p>Synthesia is an AI video creation platform that lets you create professional videos with AI avatars and voices.</p>

            <h3>Key Features</h3>
            <ul>
                <li>AI Avatars</li>
                <li>Text-to-Speech</li>
                <li>Custom Branding</li>
                <li>Multiple Languages</li>
                <li>Video Templates</li>
            </ul>

            <h3>Creating Your First Video</h3>
            <ol>
                <li>Choose a template or start from scratch</li>
                <li>Select an AI avatar</li>
                <li>Write your script</li>
                <li>Choose voice and language</li>
                <li>Add visuals and branding</li>
                <li>Generate and download</li>
            </ol>

            <h3>Best Practices</h3>
            <ul>
                <li>Write natural-sounding scripts</li>
                <li>Use appropriate pacing</li>
                <li>Add visual elements</li>
                <li>Maintain brand consistency</li>
            </ul>
        `,
        resources: [
            {
                title: "Synthesia Help Center",
                url: "https://www.synthesia.io/help",
                type: "documentation"
            },
            {
                title: "Video Creation Guide",
                url: "https://www.synthesia.io/guides",
                type: "guide"
            }
        ]
    },
    {
        id: 12,
        toolName: "Mubert",
        category: "AI Audio Creation",
        title: "AI Music Generation with Mubert",
        difficulty: "beginner",
        duration: "20 mins",
        preview: "Create custom AI-generated music and soundtracks using Mubert's platform.",
        content: `
            <h3>Introduction to Mubert</h3>
            <p>Mubert is an AI music generation platform that creates custom music tracks based on your preferences and requirements.</p>

            <h3>Key Features</h3>
            <ul>
                <li>Genre-based generation</li>
                <li>Mood selection</li>
                <li>Duration control</li>
                <li>Commercial licensing</li>
                <li>API integration</li>
            </ul>

            <h3>Creating Your First Track</h3>
            <ol>
                <li>Choose your music genre</li>
                <li>Select mood and style</li>
                <li>Set track duration</li>
                <li>Generate variations</li>
                <li>Download and use</li>
            </ol>

            <h3>Best Practices</h3>
            <ul>
                <li>Experiment with different genres</li>
                <li>Combine multiple moods</li>
                <li>Use for various projects</li>
                <li>Check licensing terms</li>
            </ul>
        `,
        resources: [
            {
                title: "Mubert Documentation",
                url: "https://mubert.com/docs",
                type: "documentation"
            },
            {
                title: "Music Generation Guide",
                url: "https://mubert.com/guide",
                type: "guide"
            }
        ]
    },
    {
        id: 13,
        toolName: "Tableau",
        category: "AI Data Analysis",
        title: "Data Visualization with Tableau",
        difficulty: "intermediate",
        duration: "45 mins",
        preview: "Master data visualization and analysis using Tableau's powerful platform.",
        content: `
            <h3>Introduction to Tableau</h3>
            <p>Tableau is a powerful data visualization and business intelligence tool that helps you analyze and present data effectively.</p>

            <h3>Core Concepts</h3>
            <ul>
                <li>Data Connection</li>
                <li>Visualization Types</li>
                <li>Calculations and Formulas</li>
                <li>Dashboards</li>
                <li>Story Points</li>
            </ul>

            <h3>Creating Your First Dashboard</h3>
            <ol>
                <li>Connect to your data source</li>
                <li>Choose visualization types</li>
                <li>Apply calculations and filters</li>
                <li>Create interactive elements</li>
                <li>Build and share dashboards</li>
            </ol>

            <h3>Advanced Features</h3>
            <ul>
                <li>Advanced calculations</li>
                <li>Parameters and sets</li>
                <li>Custom SQL</li>
                <li>Data blending</li>
            </ul>
        `,
        resources: [
            {
                title: "Tableau Documentation",
                url: "https://help.tableau.com/current/pro/desktop/en-us/default.htm",
                type: "documentation"
            },
            {
                title: "Tableau Training",
                url: "https://www.tableau.com/learn/training",
                type: "guide"
            }
        ]
    },
    {
        id: 14,
        toolName: "Glide",
        category: "No-Code Mobile Apps",
        title: "Building Mobile Apps with Glide",
        difficulty: "beginner",
        duration: "30 mins",
        preview: "Create mobile apps from Google Sheets using Glide's no-code platform.",
        content: `
            <h3>Introduction to Glide</h3>
            <p>Glide is a no-code platform that lets you create mobile apps from Google Sheets data without coding.</p>

            <h3>Core Concepts</h3>
            <ul>
                <li>Data Structure</li>
                <li>App Layout</li>
                <li>User Authentication</li>
                <li>Actions and Workflows</li>
                <li>Custom Styling</li>
            </ul>

            <h3>Building Your First App</h3>
            <ol>
                <li>Connect your Google Sheet</li>
                <li>Design your app layout</li>
                <li>Configure data views</li>
                <li>Add user features</li>
                <li>Test and publish</li>
            </ol>

            <h3>Best Practices</h3>
            <ul>
                <li>Plan your data structure</li>
                <li>Use appropriate layouts</li>
                <li>Implement user roles</li>
                <li>Test on multiple devices</li>
            </ul>
        `,
        resources: [
            {
                title: "Glide Documentation",
                url: "https://docs.glideapps.com",
                type: "documentation"
            },
            {
                title: "Glide Templates",
                url: "https://www.glideapps.com/templates",
                type: "guide"
            }
        ]
    },
    {
        id: 15,
        toolName: "Canva",
        category: "No-Code Web Development",
        title: "Design Basics with Canva",
        difficulty: "beginner",
        duration: "20 mins",
        preview: "Learn the fundamentals of design using Canva's intuitive platform.",
        content: `
            <h3>Introduction to Canva</h3>
            <p>Canva is a user-friendly design tool that helps you create beautiful graphics, presentations, and more without design experience.</p>

            <h3>Getting Started</h3>
            <ol>
                <li>Create a Canva account</li>
                <li>Explore the dashboard</li>
                <li>Choose a template or start from scratch</li>
                <li>Learn basic design principles</li>
            </ol>

            <h3>Basic Design Elements</h3>
            <ul>
                <li>Text and typography</li>
                <li>Images and graphics</li>
                <li>Colors and palettes</li>
                <li>Layout and composition</li>
            </ul>

            <h3>Video Tutorial</h3>
            <div class="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/8s3bdVxuFgs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `,
        resources: [
            {
                title: "Canva Design School",
                url: "https://www.canva.com/learn/",
                type: "documentation"
            },
            {
                title: "Canva YouTube Channel",
                url: "https://www.youtube.com/c/Canva",
                type: "guide"
            }
        ]
    },
    {
        id: 16,
        toolName: "Figma",
        category: "No-Code Web Development",
        title: "UI/UX Design with Figma",
        difficulty: "intermediate",
        duration: "45 mins",
        preview: "Master UI/UX design principles using Figma's powerful design platform.",
        content: `
            <h3>Introduction to Figma</h3>
            <p>Figma is a collaborative interface design tool that helps you create beautiful user interfaces and experiences.</p>

            <h3>Core Concepts</h3>
            <ul>
                <li>Components and instances</li>
                <li>Auto-layout and constraints</li>
                <li>Prototyping and interactions</li>
                <li>Design systems</li>
                <li>Collaboration features</li>
            </ul>

            <h3>Creating Your First Design</h3>
            <ol>
                <li>Set up your workspace</li>
                <li>Create frames and components</li>
                <li>Apply styles and effects</li>
                <li>Build interactive prototypes</li>
                <li>Share and collaborate</li>
            </ol>

            <h3>Video Tutorial</h3>
            <div class="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/kbZejnPX5lw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `,
        resources: [
            {
                title: "Figma Help Center",
                url: "https://help.figma.com/",
                type: "documentation"
            },
            {
                title: "Figma Community",
                url: "https://www.figma.com/community",
                type: "guide"
            }
        ]
    },
    {
        id: 17,
        toolName: "Stable Diffusion",
        category: "AI Image Creation",
        title: "Advanced AI Art with Stable Diffusion",
        difficulty: "advanced",
        duration: "60 mins",
        preview: "Master the art of creating stunning AI-generated images using Stable Diffusion.",
        content: `
            <h3>Introduction to Stable Diffusion</h3>
            <p>Stable Diffusion is a powerful open-source AI image generation model that offers advanced control over image creation.</p>

            <h3>Advanced Techniques</h3>
            <ul>
                <li>Custom model training</li>
                <li>ControlNet and inpainting</li>
                <li>LoRA fine-tuning</li>
                <li>Negative prompts</li>
                <li>Seed management</li>
            </ul>

            <h3>Workflow Optimization</h3>
            <ol>
                <li>Set up your environment</li>
                <li>Choose the right model</li>
                <li>Master prompt engineering</li>
                <li>Fine-tune parameters</li>
                <li>Post-process your images</li>
            </ol>

            <h3>Video Tutorial</h3>
            <div class="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/DHaL56P6f5M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `,
        resources: [
            {
                title: "Stable Diffusion Wiki",
                url: "https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki",
                type: "documentation"
            },
            {
                title: "Civitai Models",
                url: "https://civitai.com/",
                type: "guide"
            }
        ]
    },
    {
        id: 18,
        toolName: "Airtable",
        category: "No-Code Automation",
        title: "Database Automation with Airtable",
        difficulty: "intermediate",
        duration: "35 mins",
        preview: "Learn how to create powerful databases and automate workflows with Airtable.",
        content: `
            <h3>Introduction to Airtable</h3>
            <p>Airtable is a flexible database tool that combines the power of spreadsheets with the capabilities of a database.</p>

            <h3>Core Features</h3>
            <ul>
                <li>Custom field types</li>
                <li>Linked records</li>
                <li>Views and filtering</li>
                <li>Automations</li>
                <li>Integrations</li>
            </ul>

            <h3>Building Your Database</h3>
            <ol>
                <li>Design your data structure</li>
                <li>Create custom fields</li>
                <li>Set up relationships</li>
                <li>Configure views</li>
                <li>Add automations</li>
            </ol>

            <h3>Video Tutorial</h3>
            <div class="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/7VWxOUhxX_4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `,
        resources: [
            {
                title: "Airtable Support",
                url: "https://support.airtable.com/",
                type: "documentation"
            },
            {
                title: "Airtable Templates",
                url: "https://www.airtable.com/templates",
                type: "guide"
            }
        ]
    },
    {
        id: 19,
        toolName: "Notion",
        category: "No-Code Web Development",
        title: "Building Knowledge Bases with Notion",
        difficulty: "beginner",
        duration: "25 mins",
        preview: "Create powerful knowledge bases and productivity systems using Notion.",
        content: `
            <h3>Introduction to Notion</h3>
            <p>Notion is an all-in-one workspace for notes, tasks, wikis, and databases.</p>

            <h3>Key Features</h3>
            <ul>
                <li>Blocks and pages</li>
                <li>Databases and views</li>
                <li>Templates</li>
                <li>Collaboration</li>
                <li>Integrations</li>
            </ul>

            <h3>Getting Started</h3>
            <ol>
                <li>Set up your workspace</li>
                <li>Create your first page</li>
                <li>Add databases</li>
                <li>Use templates</li>
                <li>Share with your team</li>
            </ol>

            <h3>Video Tutorial</h3>
            <div class="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/7VWxOUhxX_4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `,
        resources: [
            {
                title: "Notion Help Center",
                url: "https://www.notion.so/help",
                type: "documentation"
            },
            {
                title: "Notion Templates",
                url: "https://www.notion.so/templates",
                type: "guide"
            }
        ]
    },
    {
        id: 20,
        toolName: "Power Automate",
        category: "No-Code Automation",
        title: "Microsoft Power Automate Mastery",
        difficulty: "advanced",
        duration: "50 mins",
        preview: "Master Microsoft Power Automate to create complex enterprise workflows.",
        content: `
            <h3>Introduction to Power Automate</h3>
            <p>Microsoft Power Automate is an enterprise-grade automation platform that helps you create complex workflows across Microsoft 365 and other services.</p>

            <h3>Advanced Concepts</h3>
            <ul>
                <li>Custom connectors</li>
                <li>Expressions and functions</li>
                <li>Error handling</li>
                <li>Approval flows</li>
                <li>AI Builder integration</li>
            </ul>

            <h3>Building Enterprise Workflows</h3>
            <ol>
                <li>Design your workflow</li>
                <li>Configure triggers and actions</li>
                <li>Add conditional logic</li>
                <li>Implement error handling</li>
                <li>Test and deploy</li>
            </ol>

            <h3>Video Tutorial</h3>
            <div class="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/7VWxOUhxX_4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `,
        resources: [
            {
                title: "Power Automate Documentation",
                url: "https://docs.microsoft.com/en-us/power-automate/",
                type: "documentation"
            },
            {
                title: "Power Automate Templates",
                url: "https://us.flow.microsoft.com/en-us/templates/",
                type: "guide"
            }
        ]
    },
    {
        id: 21,
        toolName: "Descript",
        category: "AI Audio Creation",
        title: "Audio Editing with Descript",
        difficulty: "intermediate",
        duration: "30 mins",
        preview: "Learn how to edit audio and create podcasts using Descript's AI-powered platform.",
        content: `
            <h3>Introduction to Descript</h3>
            <p>Descript is an AI-powered audio and video editor that transcribes your content and allows you to edit it like a document.</p>

            <h3>Key Features</h3>
            <ul>
                <li>Transcription editing</li>
                <li>Overdub voice cloning</li>
                <li>Multitrack editing</li>
                <li>Screen recording</li>
                <li>Video editing</li>
            </ul>

            <h3>Creating Your First Project</h3>
            <ol>
                <li>Import your audio</li>
                <li>Edit the transcription</li>
                <li>Add effects and music</li>
                <li>Export your project</li>
            </ol>

            <h3>Video Tutorial</h3>
            <div class="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/7VWxOUhxX_4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `,
        resources: [
            {
                title: "Descript Help Center",
                url: "https://www.descript.com/help",
                type: "documentation"
            },
            {
                title: "Descript Tutorials",
                url: "https://www.descript.com/tutorials",
                type: "guide"
            }
        ]
    },
    {
        id: 22,
        toolName: "Power BI",
        category: "AI Data Analysis",
        title: "Data Visualization with Power BI",
        difficulty: "advanced",
        duration: "55 mins",
        preview: "Master data visualization and business intelligence using Microsoft Power BI.",
        content: `
            <h3>Introduction to Power BI</h3>
            <p>Power BI is a business analytics tool that helps you visualize data and share insights across your organization.</p>

            <h3>Advanced Features</h3>
            <ul>
                <li>DAX formulas</li>
                <li>Custom visuals</li>
                <li>Row-level security</li>
                <li>DirectQuery</li>
                <li>AI insights</li>
            </ul>

            <h3>Creating Advanced Reports</h3>
            <ol>
                <li>Connect to data sources</li>
                <li>Transform and model data</li>
                <li>Create calculated columns and measures</li>
                <li>Design interactive visualizations</li>
                <li>Share and collaborate</li>
            </ol>

            <h3>Video Tutorial</h3>
            <div class="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/7VWxOUhxX_4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `,
        resources: [
            {
                title: "Power BI Documentation",
                url: "https://docs.microsoft.com/en-us/power-bi/",
                type: "documentation"
            },
            {
                title: "Power BI Community",
                url: "https://community.powerbi.com/",
                type: "guide"
            }
        ]
    },
    {
        id: 23,
        toolName: "Adalo",
        category: "No-Code Mobile Apps",
        title: "Building Mobile Apps with Adalo",
        difficulty: "intermediate",
        duration: "40 mins",
        preview: "Create beautiful mobile apps without code using Adalo's visual development platform.",
        content: `
            <h3>Introduction to Adalo</h3>
            <p>Adalo is a no-code platform that lets you create mobile apps with a visual interface and powerful features.</p>

            <h3>Core Concepts</h3>
            <ul>
                <li>Pages and navigation</li>
                <li>Components and actions</li>
                <li>Database and collections</li>
                <li>User authentication</li>
                <li>Publishing and distribution</li>
            </ul>

            <h3>Building Your First App</h3>
            <ol>
                <li>Design your app structure</li>
                <li>Create pages and components</li>
                <li>Set up your database</li>
                <li>Add user features</li>
                <li>Test and publish</li>
            </ol>

            <h3>Video Tutorial</h3>
            <div class="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/7VWxOUhxX_4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `,
        resources: [
            {
                title: "Adalo Documentation",
                url: "https://docs.adalo.com/",
                type: "documentation"
            },
            {
                title: "Adalo Templates",
                url: "https://www.adalo.com/templates",
                type: "guide"
            }
        ]
    },
    {
        id: 24,
        toolName: "ChatGPT",
        category: "AI Writing",
        title: "Advanced Prompt Engineering with ChatGPT",
        difficulty: "advanced",
        duration: "45 mins",
        preview: "Master the art of prompt engineering to get the most out of ChatGPT.",
        content: `
            <h3>Advanced Prompt Engineering</h3>
            <p>Learn how to craft effective prompts that yield precise and useful responses from ChatGPT.</p>

            <h3>Key Concepts</h3>
            <ul>
                <li>Role-based prompting</li>
                <li>Chain-of-thought reasoning</li>
                <li>Few-shot learning</li>
                <li>Context management</li>
                <li>Output formatting</li>
            </ul>

            <h3>Real-World Examples</h3>
            <div class="example-section">
                <h4>1. Content Creation</h4>
                <pre><code>Role: You are an expert content strategist
Task: Create a content calendar for a tech startup
Format: Monthly breakdown with topics, formats, and KPIs
Context: Target audience is tech-savvy millennials</code></pre>

                <h4>2. Code Generation</h4>
                <pre><code>Role: You are a senior software architect
Task: Design a scalable microservice architecture
Requirements: Include API endpoints, data flow, and security
Tech Stack: Node.js, MongoDB, Docker</code></pre>
            </div>

            <h3>Video Tutorial</h3>
            <div class="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/7VWxOUhxX_4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `,
        resources: [
            {
                title: "OpenAI Prompt Engineering Guide",
                url: "https://platform.openai.com/docs/guides/prompt-engineering",
                type: "documentation"
            },
            {
                title: "Advanced Prompting Techniques",
                url: "https://www.promptingguide.ai/advanced",
                type: "guide"
            }
        ]
    },
    {
        id: 25,
        toolName: "Midjourney",
        category: "AI Image Creation",
        title: "Professional Art Direction with Midjourney",
        difficulty: "advanced",
        duration: "50 mins",
        preview: "Learn advanced techniques for creating professional-grade AI art with Midjourney.",
        content: `
            <h3>Professional Art Direction</h3>
            <p>Master advanced techniques for creating consistent, high-quality AI art for professional projects.</p>

            <h3>Advanced Techniques</h3>
            <ul>
                <li>Style consistency across generations</li>
                <li>Advanced parameter combinations</li>
                <li>Image-to-image transformations</li>
                <li>Custom style training</li>
                <li>Commercial usage optimization</li>
            </ul>

            <h3>Project Examples</h3>
            <div class="example-section">
                <h4>1. Brand Identity</h4>
                <pre><code>Task: Create a consistent visual language
Style: Modern, minimalist, tech-focused
Elements: Logo variations, color schemes, patterns
Output: Brand style guide with AI-generated assets</code></pre>

                <h4>2. Marketing Campaign</h4>
                <pre><code>Task: Generate campaign visuals
Style: Bold, vibrant, attention-grabbing
Elements: Product showcases, lifestyle shots
Output: Complete marketing asset package</code></pre>
            </div>

            <h3>Video Tutorial</h3>
            <div class="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/7VWxOUhxX_4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `,
        resources: [
            {
                title: "Midjourney Advanced Guide",
                url: "https://docs.midjourney.com/advanced",
                type: "documentation"
            },
            {
                title: "Professional Art Direction",
                url: "https://www.midjourney.com/pro",
                type: "guide"
            }
        ]
    },
    {
        id: 26,
        toolName: "Bubble",
        category: "No-Code Web Development",
        title: "Building Enterprise Applications with Bubble",
        difficulty: "advanced",
        duration: "60 mins",
        preview: "Learn how to build scalable, enterprise-grade applications using Bubble's advanced features.",
        content: `
            <h3>Enterprise Application Development</h3>
            <p>Master advanced Bubble development techniques for building robust, scalable applications.</p>

            <h3>Advanced Features</h3>
            <ul>
                <li>Custom plugins development</li>
                <li>API integration patterns</li>
                <li>Database optimization</li>
                <li>User authentication flows</li>
                <li>Performance optimization</li>
            </ul>

            <h3>Case Studies</h3>
            <div class="example-section">
                <h4>1. SaaS Platform</h4>
                <pre><code>Features:
- Multi-tenant architecture
- Subscription management
- Analytics dashboard
- User management
- API integration</code></pre>

                <h4>2. E-commerce Solution</h4>
                <pre><code>Features:
- Product catalog
- Shopping cart
- Payment processing
- Order management
- Inventory tracking</code></pre>
            </div>

            <h3>Video Tutorial</h3>
            <div class="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/7VWxOUhxX_4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `,
        resources: [
            {
                title: "Bubble Enterprise Guide",
                url: "https://bubble.io/enterprise",
                type: "documentation"
            },
            {
                title: "Advanced Development Patterns",
                url: "https://bubble.io/patterns",
                type: "guide"
            }
        ]
    },
    {
        id: 27,
        toolName: "GitHub Copilot",
        category: "AI Code Generation",
        title: "Advanced Code Generation with GitHub Copilot",
        difficulty: "advanced",
        duration: "45 mins",
        preview: "Master advanced code generation techniques using GitHub Copilot for complex development tasks.",
        content: `
            <h3>Advanced Code Generation</h3>
            <p>Learn how to leverage GitHub Copilot for complex coding tasks and improve your development workflow.</p>

            <h3>Advanced Features</h3>
            <ul>
                <li>Multi-file code generation</li>
                <li>Test case generation</li>
                <li>Documentation generation</li>
                <li>Code refactoring</li>
                <li>API integration patterns</li>
            </ul>

            <h3>Real-World Examples</h3>
            <div class="example-section">
                <h4>1. Full-Stack Application</h4>
                <pre><code>// Generate a complete React + Node.js application
Task: Create a task management app
Features: User auth, CRUD operations, real-time updates
Tech Stack: React, Node.js, MongoDB, Socket.io</code></pre>

                <h4>2. API Development</h4>
                <pre><code>// Generate a RESTful API
Task: Create an e-commerce API
Features: Product management, orders, payments
Tech Stack: Express.js, PostgreSQL, JWT auth</code></pre>
            </div>

            <h3>Video Tutorial</h3>
            <div class="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/7VWxOUhxX_4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `,
        resources: [
            {
                title: "GitHub Copilot Documentation",
                url: "https://docs.github.com/en/copilot",
                type: "documentation"
            },
            {
                title: "Advanced Coding Patterns",
                url: "https://github.com/features/copilot/advanced",
                type: "guide"
            }
        ]
    },
    {
        id: 28,
        toolName: "Runway",
        category: "AI Video Creation",
        title: "Professional Video Production with Runway",
        difficulty: "advanced",
        duration: "55 mins",
        preview: "Master professional video production techniques using Runway's AI-powered tools.",
        content: `
            <h3>Professional Video Production</h3>
            <p>Learn advanced techniques for creating professional-quality videos using Runway's AI tools.</p>

            <h3>Advanced Features</h3>
            <ul>
                <li>Advanced motion tracking</li>
                <li>Custom model training</li>
                <li>Batch processing</li>
                <li>Color grading</li>
                <li>Audio synchronization</li>
            </ul>

            <h3>Project Examples</h3>
            <div class="example-section">
                <h4>1. Commercial Production</h4>
                <pre><code>Task: Create a product commercial
Style: High-end, cinematic
Elements: Product showcase, motion graphics
Output: 30-second commercial with effects</code></pre>

                <h4>2. Social Media Content</h4>
                <pre><code>Task: Generate viral content
Style: Dynamic, engaging
Elements: Quick cuts, transitions
Output: Series of short-form videos</code></pre>
            </div>

            <h3>Video Tutorial</h3>
            <div class="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/7VWxOUhxX_4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `,
        resources: [
            {
                title: "Runway Pro Guide",
                url: "https://docs.runwayml.com/pro",
                type: "documentation"
            },
            {
                title: "Video Production Best Practices",
                url: "https://runwayml.com/best-practices",
                type: "guide"
            }
        ]
    },
    {
        id: 29,
        toolName: "Zapier",
        category: "No-Code Automation",
        title: "Enterprise Automation with Zapier",
        difficulty: "advanced",
        duration: "50 mins",
        preview: "Learn how to build complex enterprise automation workflows using Zapier's advanced features.",
        content: `
            <h3>Enterprise Automation</h3>
            <p>Master advanced Zapier automation techniques for complex enterprise workflows.</p>

            <h3>Advanced Features</h3>
            <ul>
                <li>Custom apps development</li>
                <li>Advanced filtering</li>
                <li>Error handling</li>
                <li>Data transformation</li>
                <li>Multi-step workflows</li>
            </ul>

            <h3>Case Studies</h3>
            <div class="example-section">
                <h4>1. Customer Service Automation</h4>
                <pre><code>Workflow:
- Ticket creation from email
- Assignment to team members
- Status updates
- Customer notifications
- Analytics tracking</code></pre>

                <h4>2. Sales Pipeline Automation</h4>
                <pre><code>Workflow:
- Lead capture from forms
- CRM updates
- Email sequences
- Task assignments
- Performance tracking</code></pre>
            </div>

            <h3>Video Tutorial</h3>
            <div class="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/7VWxOUhxX_4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `,
        resources: [
            {
                title: "Zapier Enterprise Guide",
                url: "https://zapier.com/enterprise",
                type: "documentation"
            },
            {
                title: "Advanced Automation Patterns",
                url: "https://zapier.com/patterns",
                type: "guide"
            }
        ]
    }
];

// DOM Elements
const tutorialsContainer = document.getElementById('tutorialsContainer');
const searchInput = document.getElementById('searchInput');
const categorySelect = document.getElementById('categorySelect');
const tutorialModal = document.getElementById('tutorialModal');
const modalClose = document.getElementById('modalClose');

// Create Tutorial Card
const createTutorialCard = (tutorial) => {
    const card = document.createElement('div');
    card.className = 'tutorial-card';
    card.innerHTML = `
        <h2>${tutorial.title}</h2>
        <div class="tutorial-meta">
            <span class="difficulty-badge difficulty-${tutorial.difficulty}">
                <i class="fas fa-signal"></i> ${tutorial.difficulty}
            </span>
            <span>
                <i class="far fa-clock"></i> ${tutorial.duration}
            </span>
        </div>
        <p class="tutorial-preview">${tutorial.preview}</p>
    `;
    
    card.addEventListener('click', () => showTutorialDetails(tutorial));
    
    return card;
};

// Show Tutorial Details
const showTutorialDetails = (tutorial) => {
    document.getElementById('modalTitle').textContent = tutorial.title;
    document.getElementById('modalDifficulty').className = `difficulty-badge difficulty-${tutorial.difficulty}`;
    document.getElementById('modalDifficulty').innerHTML = `<i class="fas fa-signal"></i> ${tutorial.difficulty}`;
    document.getElementById('modalDuration').innerHTML = `<i class="far fa-clock"></i> ${tutorial.duration}`;
    document.getElementById('modalContent').innerHTML = tutorial.content;
    
    const resourcesHtml = tutorial.resources.map(resource => `
        <a href="${resource.url}" target="_blank" class="resource-link">
            <i class="fas fa-${resource.type === 'documentation' ? 'book' : 'compass'}"></i>
            ${resource.title}
        </a>
    `).join('');
    
    document.getElementById('modalResources').innerHTML = resourcesHtml;
    
    tutorialModal.classList.add('active');
};

// Filter Tutorials
const filterTutorials = () => {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categorySelect.value;
    
    const filteredTutorials = tutorials.filter(tutorial => {
        const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm) ||
                            tutorial.toolName.toLowerCase().includes(searchTerm) ||
                            tutorial.preview.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || tutorial.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    
    displayTutorials(filteredTutorials);
};

// Display Tutorials
const displayTutorials = (tutorialsToDisplay) => {
    tutorialsContainer.innerHTML = '';
    tutorialsToDisplay.forEach(tutorial => {
        tutorialsContainer.appendChild(createTutorialCard(tutorial));
    });
};

// Event Listeners
searchInput.addEventListener('input', filterTutorials);
categorySelect.addEventListener('change', filterTutorials);
modalClose.addEventListener('click', () => tutorialModal.classList.remove('active'));
tutorialModal.addEventListener('click', (e) => {
    if (e.target === tutorialModal) tutorialModal.classList.remove('active');
});

// Initialize
displayTutorials(tutorials); 