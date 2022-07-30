import { Images, Options, Contacts, Curriculum } from './interfaces';

export const PORTUGESE_CURRICULUM: Curriculum[] = [
    {
        column: {
            titles: [
                {
                    title: "Educação",
                    subtitles: [
                        {
                            subtitle: "Cursando",
                            itens: [
                                {
                                    item: "Ciências da Computação - UFSC"
                                },
                                {
                                    item: "6.º Semestre - Previsão 2023.2",
                                    noDot: true
                                }
                            ]
                        },
                        {   
                            subtitle: "Inglês avançado",
                            itens: [
                                {
                                    item: "Certificação B2 First, Cambridge English",
                                },
                                {
                                    item: "Intercâmbio para Cambridge, Inglaterra"
                                }
                            ]
                        }
                    ]
                },
                {
                    title: "Experiências",
                    subtitles: [
                        {
                            subtitle: "Pieta.tech",
                            itens: [
                                {
                                    item: "Desenvolvedor Full Stack"
                                },
                                {
                                    item: "Jun de 2021 - Fev de 2022"
                                }
                            ]
                        },
                        {
                            subtitle: "Principais tecnologias utilizadas",
                            itens: [
                                {
                                    item: "Angular (TypeScript, HTML, CSS)",
                                },
                                {
                                    item: "Django (Python)"
                                },
                                {
                                    item: "SQLite",
                                },
                                {
                                    item: "Bitbucket (Git)",
                                }
                            ]
                        }
                    ]
                }
            ]
        }

    },
    {
        column: {
            titles: [
                {
                    title: "Matérias",
                    subtitles: [
                        {
                            subtitle: "",
                            itens: [
                                {
                                    item: "Programação Orientada a Objetos I"
                                },
                                {
                                    item: "Programação Orientada a Objetos II"
                                },
                                {
                                    item: "Programação Concorrente"
                                },
                                {
                                    item: "Estruturas de Dados"
                                },
                                {
                                    item: "Sistemas Operacionais I"
                                },
                                {
                                    item: "Engenharia de Software I"
                                },
                                {
                                    item: "Organização de Computadores I"
                                },
                                {
                                    item: "Fundamentos de Matemática Discreta para Computação"
                                },
                                {
                                    item: "Circuitos e Técnicas Digitais"
                                },
                                {
                                    item: "Sistemas Digitais"
                                },
                                {
                                    item: "Introdução à Computação"
                                },
                                {
                                    item: "Teoria da Computação"
                                },
                                {
                                    item: "Cálculo I"
                                },
                                {
                                    item: "Cálculo II"
                                },
                                {
                                    item: "Cálculo Numérico em Computadores"
                                },
                                {
                                    item: "Pré-cálculo"
                                },
                                {
                                    item: "Ciência, Tecnologia e Sociedade"
                                },
                                {
                                    item: "Geometria Analítica"
                                },
                                {
                                    item: "Álgebra Linear"
                                },
                                {
                                    item: "Grafos"
                                },
                                {
                                    item: "Redes de Computadores I"
                                }
                            ]
                        }
                    ]
                }
            ]
        }

    },
    {
        column: {
            titles: [
                {
                    title: "Linguagens",
                    subtitles: [
                        {
                            subtitle: "Maior domínio",
                            itens: [
                                {
                                    item: "Python"
                                },
                                {
                                    item: "JavaScript / TypeScript"
                                },
                                {
                                    item: "HTML"
                                },
                                {
                                    item: "CSS"
                                }
                            ]
                        },
                        {
                            subtitle: "Menor domínio",
                            itens: [
                                {
                                    item: "Java"
                                },
                                {
                                    item: "C / C++"
                                },
                                {
                                    item: "C#"
                                } 
                            ]
                        }
                    ]
                },
                {
                    title: "Ferramentas",
                    subtitles: [
                        {
                            subtitle: "",
                            itens: [
                                {
                                    item: "Ferramentas de versionamento (Git / GitHub / Bitbucket)",
                                },
                                {
                                    item: "IDE (Visual Studio Code)"
                                }   
                            ]
                        }
                    ]
                },
                {
                    title: "Habilidades",
                    subtitles: [
                        {
                            subtitle: "",
                            itens: [
                                {
                                    item: "Proativo",
                                },
                                {
                                    item: "Comunicativo"
                                },
                                {
                                    item: "Aprendo rápido",
                                },
                                {
                                    item: "Curioso por novas linguagens e experiências",
                                },
                                {
                                    item: "Em busca de inovação",
                                },
                                {
                                    item: "Observador",
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
];

export const PORTUGESE_CONTACTS: Contacts = {
    text: "Contatos:",
    rows: [
        {
            row: [
                {
                    url: "./assets/icons/GitHub.svg#github",
                    content: "github.com/RicardoJensen",
                    link:"https://github.com/RicardoJensen"
                },
                {
                    url: "./assets/icons/Email.svg#email",
                    content: "ricardoeyng10@gmail.com",
                    link:"mailto:ricardoeyng10@gmail.com"
                },
                {
                    url: "./assets/icons/Phone.svg#phone",
                    content: "(41) 99226-0027",
                    link:"tel:+5541992260027"
                }
            ]
        },
        {
            row: [
                {
                    url: "./assets/icons/Linkedin.svg#linkedin",
                    content: "linkedin.com/in/ricardo-jensen-eyng-1717991b2",
                    link:"https://linkedin.com/in/ricardo-jensen-eyng-1717991b2"
                },
                {
                    url: "./assets/icons/Location.svg#location",
                    content: "Florianópolis - SC",
                    link:"https://www.google.com/maps/place/Florian%C3%B3polis,+SC/data=!4m2!3m1!1s0x9527394eb2c632d7:0x81bc550b6a04c746?sa=X&ved=2ahUKEwiDz96fkqr2AhUQJLkGHdCFB3cQ8gF6BAgsEAE"
                },
            ]
        }
    ]
};

export const PORTUGESE_OPTIONS: Options = {
    summedUpText: "Resumido",
    languageText: "Idioma:"
};

export const ENGLISH_CURRICULUM: Curriculum[] = [
    {
        column: {
            titles: [
                {
                    title: "Education",
                    subtitles: [
                        {
                            subtitle: "University",
                            itens: [
                                {
                                    item: "Computer Science - 6th Semester "
                                },
                                {
                                    item: "Federal University of Santa Catarina",
                                    noDot: true
                                },
                            ]
                        },
                        {   
                            subtitle: "Languages",
                            itens: [
                                {
                                    item: "B2 First (Cambridge English Qualification) and a exchange to Cambridge",
                                },
                                {
                                    item: "Native Portuguese Speaker"
                                }
                            ]
                        }
                    ]
                },
                {
                    title: "Work expericence",
                    subtitles: [
                        {
                            subtitle: "Pieta.tech",
                            itens: [
                                {
                                    item: "Full Stack Developer"
                                },
                                {
                                    item: "Jun, 2021 - Feb, 2022"
                                }
                            ]
                        },
                        {
                            subtitle: "Stack",
                            itens: [
                                {
                                    item: "Angular (TypeScript, HTML, CSS)",
                                },
                                {
                                    item: "Django (Python)"
                                },
                                {
                                    item: "SQLite"
                                }
                            ]
                        }
                    ]
                }
            ]
        }

    },
    {
        column: {
            titles: [
                {
                    title: "College Subjects",
                    subtitles: [
                        {
                            subtitle: "",
                            itens: [
                                {
                                    item: "Analytic Geometry"
                                },
                                {
                                    item: "Calculus I"
                                },
                                { 
                                    item: "Calculus II"
                                },
                                {
                                    item: "Computer Networks I"
                                },
                                {
                                    item: "Concurrent Programming"
                                },
                                {
                                    item: "Data Structures"
                                },
                                {
                                    item: "Digital Electronics"
                                },
                                {
                                    item: "Digital Systems"
                                },
                                {
                                    item: "Graph Theory"
                                },
                                {
                                    item: "Introductory Discrete Mathematics for Computer Science"
                                },
                                {
                                    item: "Introduction to Computing"
                                },
                                {
                                    item: "Linear Algebra"
                                },
                                {
                                    item: "Numerical Calculus"
                                },
                                {
                                    item: "Object-Oriented Programming I"
                                },
                                {
                                    item: "Object-Oriented Programming II"
                                },
                                {
                                    item: "Operating Systems I"
                                },
                                {
                                    item: "Computer Organization and Design I"
                                },
                                {
                                    item: "Precalculus"
                                },
                                {
                                    item: "Science, Technology and Society"
                                },
                                {
                                    item: "Software Engineering I"
                                },
                                {
                                    item: "Theory of computation"
                                }
                            ]
                        }
                    ]
                }
            ]
        }

    },
    {
        column: {
            titles: [
                {
                    title: "Programming languages",
                    subtitles: [
                        {
                            subtitle: "More familiarized",
                            itens: [
                                {
                                    item: "Python"
                                },
                                {
                                    item: "JavaScript / TypeScript"
                                },
                                {
                                    item: "HTML"
                                },
                                {
                                    item: "CSS"
                                }
                            ]
                        },
                        {
                            subtitle: "Less familiarized",
                            itens: [
                                {
                                    item: "Java"
                                },
                                {
                                    item: "C"
                                },
                                {
                                    item: "C++"
                                },
                                {
                                    item: "C#"
                                } 
                            ]
                        }
                    ]
                },
                {
                    title: "Tools",
                    subtitles: [
                        {
                            subtitle: "",
                            itens: [
                                {
                                    item: "Version Control System (Git / GitHub / Bitbucket)",
                                },
                                {
                                    item: "IDE (Visual Studio Code)"
                                }   
                            ]
                        }
                    ]
                },
                {
                    title: "Qualities",
                    subtitles: [
                        {
                            subtitle: "",
                            itens: [
                                {
                                    item: "Proactive",
                                },
                                {
                                    item: "Communicative"
                                },
                                {
                                    item: "Fast learner",
                                },
                                {
                                    item: "Curious",
                                },
                                {
                                    item: "Attentive  to detail"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
];

export const ENGLISH_CONTACTS: Contacts = {
    text: "Contacts:",
    rows: [
        {
            row: [
                {
                    url: "./assets/icons/GitHub.svg#github",
                    content: "github.com/RicardoJensen",
                    link:"https://github.com/RicardoJensen"
                },
                {
                    url: "./assets/icons/Email.svg#email",
                    content: "ricardoeyng10@gmail.com",
                    link:"mailto:ricardoeyng10@gmail.com"
                },
                {
                    url: "./assets/icons/Phone.svg#phone",
                    content: "+55 (41) 99226-0027",
                    link:"tel:+5541992260027"
                }
            ]
        },
        {
            row: [
                {
                    url: "./assets/icons/Linkedin.svg#linkedin",
                    content: "linkedin.com/in/ricardo-jensen-eyng-1717991b2",
                    link:"https://linkedin.com/in/ricardo-jensen-eyng-1717991b2"
                },
                {
                    url: "./assets/icons/Location.svg#location",
                    content: "Florianópolis, Brazil",
                    link:"https://www.google.com.br/maps/place/Florian%C3%B3polis,+SC/@-27.5713144,-48.7504712,10z/data=!3m1!4b1!4m5!3m4!1s0x9527394eb2c632d7:0x81bc550b6a04c746!8m2!3d-27.5948036!4d-48.5569286"
                },
            ]
        }
    ]
};

export const ENGLISH_OPTIONS : Options = {
    summedUpText: "Summed Up",
    languageText: "Language:"
};

export const IMAGES: Images[] = [
    {
        url: "./assets/images/img1.jpg"
    },
    {
        url: "./assets/images/img2.jpg"
    },
    {
        url: "./assets/images/img3.jpg"
    },
    {
        url: "./assets/images/img4.jpg"
    }
];