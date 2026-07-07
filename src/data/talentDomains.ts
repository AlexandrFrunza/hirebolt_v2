export type TalentProfile = {
  name: string;
  role: string;
  education: string;
  skills: string[];
  description: string;
};

export type TalentDomain = {
  label: string;
  description: string;
  profiles: [TalentProfile, TalentProfile, TalentProfile];
};

export const talentDomains: TalentDomain[] = [
  {
    label: "ML Engineers",
    description:
      "Build training pipelines, optimize models, and support end-to-end model development and experimentation.",
    profiles: [
      {
        name: "Sofia K.",
        role: "Senior ML Engineer",
        education: "MSc Artificial Intelligence, University of Belgrade",
        skills: ["PyTorch", "Distributed training", "MLOps", "Computer Vision"],
        description:
          "Built scalable training pipelines for multimodal vision models and optimized distributed GPU workloads.",
      },
      {
        name: "Diego R.",
        role: "Machine Learning Engineer",
        education: "BSc Computer Engineering, Universidad de los Andes",
        skills: ["TensorFlow", "Feature engineering", "Model optimization", "XGBoost"],
        description:
          "Developed production ML systems for fraud detection and recommendation engines.",
      },
      {
        name: "Katarzyna W.",
        role: "Applied ML Engineer",
        education: "MSc Data Science, Warsaw University of Technology",
        skills: ["PyTorch", "Time-series forecasting", "Kubernetes", "ML Infrastructure"],
        description:
          "Deployed large-scale forecasting models and automated model retraining pipelines for accuracy.",
      },
    ],
  },
  {
    label: "LLM Trainers & Evaluators",
    description:
      "Design prompts, run evaluations, and help shape model behavior through RLHF, DPO, and structured feedback loops.",
    profiles: [
      {
        name: "Ana M.",
        role: "LLM Trainer",
        education: "MSc Computer Science, Universidade Estadual de Campinas",
        skills: ["RLHF", "Prompt engineering", "Instruction tuning", "Human feedback"],
        description:
          "Improved instruction-following quality through RLHF annotation and prompt refinement.",
      },
      {
        name: "Ivan P.",
        role: "LLM Alignment Specialist",
        education: "MSc Artificial Intelligence, Sofia University St. Kliment Ohridski",
        skills: ["DPO", "Safety evaluations", "Prompt design", "Preference ranking"],
        description:
          "Contributed to preference datasets and safety evaluation workflows for conversational AI.",
      },
      {
        name: "Camila V.",
        role: "AI Trainer",
        education: "BSc Computer Science, Pontifical Catholic University of Chile",
        skills: ["Prompt engineering", "Data curation", "RLHF", "Multilingual evaluation"],
        description:
          "Specialized in multilingual instruction datasets across English and Spanish for conversational AI models.",
      },
    ],
  },
  {
    label: "Research Annotators",
    description:
      "Work on complex labeling tasks across code, math, and reasoning datasets to improve model performance and consistency.",
    profiles: [
      {
        name: "Oleksandr H.",
        role: "Research Annotator",
        education: "MSc Mathematics, Taras Shevchenko National University of Kyiv",
        skills: ["Mathematics", "Proof verification", "Symbolic reasoning"],
        description:
          "Annotated advanced mathematical reasoning datasets for theorem-proving models.",
      },
      {
        name: "Mariana F.",
        role: "Research Annotator",
        education: "BSc Computer Science, Universidad Nacional Autónoma de México",
        skills: ["Code evaluation", "Logic", "Structured labeling", "Proof verification"],
        description:
          "Evaluated coding benchmarks and reasoning datasets for LLM training and quality assurance.",
      },
      {
        name: "Nikola J.",
        role: "Research Annotator",
        education: "MSc Applied Mathematics, University of Zagreb",
        skills: ["Reasoning datasets", "STEM annotation", "Quality assurance"],
        description:
          "Worked on expert labeling pipelines for mathematical and logical reasoning benchmarks.",
      },
    ],
  },
  {
    label: "Domain Experts",
    description:
      "Specialists in physics, math, biology, chemistry, and engineering supporting domain-specific training and evaluation.",
    profiles: [
      {
        name: "Dr. Lucia G.",
        role: "Physics Expert",
        education: "PhD Physics, Universidad de Buenos Aires",
        skills: ["Quantum mechanics", "Scientific QA", "Technical evaluation"],
        description:
          "Supported domain-specific evaluation for scientific reasoning models with expert scientific review.",
      },
      {
        name: "Dr. Andrei T.",
        role: "Mechanical Engineering Expert",
        education: "PhD Mechanical Engineering, Politehnica University of Bucharest",
        skills: ["CAD", "Manufacturing", "Engineering simulation", "Finite Element Analysis", "Simulation"],
        description:
          "Reviewed engineering datasets and technical problem-solving benchmarks.",
      },
      {
        name: "Dr. Jelena S.",
        role: "Chemistry Specialist",
        education: "PhD Chemistry, University of Ljubljana",
        skills: ["Organic chemistry", "Scientific annotation", "Data validation"],
        description:
          "Contributed expert annotations for chemistry-focused language model training.",
      },
    ],
  },
  {
    label: "Evaluation Specialists",
    description:
      "Design benchmarks, run diagnostic tests, and measure model accuracy, safety, and reasoning quality.",
    profiles: [
      {
        name: "Tomas P.",
        role: "LLM Evaluation Specialist",
        education: "MSc AI, Czech Technical University in Prague",
        skills: ["Benchmark design", "Safety testing", "Prompt evaluation"],
        description:
          "Designed evaluation suites for reasoning and factual consistency in production AI systems.",
      },
      {
        name: "Fernanda L.",
        role: "AI Benchmark Engineer",
        education: "BSc Computer Science, Tecnológico de Monterrey",
        skills: ["Model evaluation", "Diagnostics", "Hallucination analysis"],
        description:
          "Built benchmark pipelines measuring multilingual model quality and evaluation accuracy.",
      },
      {
        name: "Stefan D.",
        role: "Model Evaluation Engineer",
        education: "MSc Software Engineering, University of Novi Sad",
        skills: ["Reasoning benchmarks", "Safety metrics", "LLM diagnostics"],
        description:
          "Evaluated model robustness across coding and reasoning tasks to improve model reliability.",
      },
    ],
  },
  {
    label: "Data Engineers",
    description:
      "Prepare, clean, and structure large datasets to keep training pipelines running without bottlenecks.",
    profiles: [
      {
        name: "Ricardo M.",
        role: "Senior Data Engineer",
        education: "BSc Information Systems, Universidad Nacional de Colombia",
        skills: ["Spark", "Airflow", "ETL", "Data Lakes", "Data Warehousing"],
        description:
          "Built scalable data pipelines supporting large-scale ML training workflows.",
      },
      {
        name: "Milica P.",
        role: "Data Engineer",
        education: "MSc Computer Science, University of Belgrade",
        skills: ["SQL", "Kafka", "Snowflake", "Data Quality"],
        description:
          "Automated data validation and ingestion pipelines for large-scale AI datasets.",
      },
      {
        name: "Jakub N.",
        role: "ML Data Engineer",
        education: "MSc Data Engineering, Wrocław University of Science and Technology",
        skills: ["Python", "Data processing", "Feature stores", "Pipeline automation"],
        description:
          "Prepared petabyte-scale datasets for distributed model training and evaluation.",
      },
    ],
  },
  {
    label: "Deep Learning & NLP Engineers",
    description:
      "Fine-tune models, improve language understanding, and address performance gaps across NLP tasks.",
    profiles: [
      {
        name: "Gabriela C.",
        role: "Deep Learning Engineer",
        education: "MSc AI, University of São Paulo",
        skills: ["Transformers", "NLP", "PyTorch", "Fine-tuning", "Model Optimization"],
        description:
          "Fine-tuned multilingual transformer models for enterprise search applications.",
      },
      {
        name: "Piotr L.",
        role: "NLP Engineer",
        education: "MSc Computer Science, AGH University of Krakow",
        skills: ["LLMs", "Retrieval", "Embeddings", "Hugging Face", "Prompt Engineering"],
        description:
          "Developed retrieval-augmented generation systems for knowledge-intensive tasks.",
      },
      {
        name: "Elena D.",
        role: "Deep Learning Engineer",
        education: "MSc Machine Learning, University of Bucharest",
        skills: ["Sequence modeling", "NLP evaluation", "Distributed training"],
        description:
          "Optimized transformer training and inference efficiency across multilingual datasets.",
      },
    ],
  },
  {
    label: "Robotics & Coding Specialists",
    description:
      "Support simulation, control systems, and real-world coding tasks for embodied AI and software agents.",
    profiles: [
      {
        name: "Marko V.",
        role: "Robotics Engineer",
        education: "MSc Robotics, University of Zagreb",
        skills: ["ROS2", "Computer vision", "SLAM", "Autonomous systems"],
        description:
          "Developed perception pipelines for autonomous mobile robots, improving navigation accuracy.",
      },
      {
        name: "Felipe O.",
        role: "Coding Specialist",
        education: "BSc Software Engineering, Universidad de Chile",
        skills: ["Python", "C++", "Algorithms", "Competitive programming"],
        description:
          "Created high-quality coding datasets and benchmark solutions for AI code generation.",
      },
      {
        name: "Oksana R.",
        role: "Embedded AI Engineer",
        education: "MSc Robotics, Lviv Polytechnic National University",
        skills: ["Robotics", "Reinforcement learning", "Edge AI", "Sensor fusion"],
        description:
          "Supported simulation environments for robotic learning and autonomous control.",
      },
    ],
  },
];
