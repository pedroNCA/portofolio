import React from "react";
import {motion} from "framer-motion";
import {FaGithub, FaLinkedin, FaEnvelope, FaInstagram} from "react-icons/fa";

// Animasi container: atur jeda & jarak kemunculan
const heroContainer = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0.5, // jeda sebelum teks pertama muncul
            staggerChildren: 0.28 // jarak antar elemen
        }
    }
};

// Animasi item teks: fade + slide up + blur halus
const heroItem = {
    hidden: {
        opacity: 0,
        y: 26,
        filter: "blur(8px)"
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1] // smooth, berkelas
        }
    }
};

// Animasi image: sedikit terlambat, scale lembut
const heroImageVariants = {
    hidden: {
        opacity: 0,
        scale: 0.9,
        x: 40
    },
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
            duration: 1,
            delay: 0.8, // image muncul setelah beberapa teks
            ease: [0.16, 1, 0.3, 1]
        }
    }
};

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            delay
        }
    })
};

function App() {
    return (
        <div className="app">
            <Hero/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}

function Hero() {
    return (
        <section id="home" className="hero-section">
            <div className="hero-inner container">
                {/* KIRI: TEXT (muncul satu-satu) */}
                <motion.div
                    className="hero-text"
                    variants={heroContainer}
                    initial="hidden"
                    animate="visible">
                    <motion.p className="hero-hi" variants={heroItem}>
                        Hi, Saya
                        <span className="hero-name">
                            &nbsp;Pedro Jose Antonio</span>
                    </motion.p>

                    <motion.h1 className="hero-title" variants={heroItem}>
                        Junior Web Developer &amp; Junior Network Engineer
                    </motion.h1>

                    <motion.p className="hero-subtitle" variants={heroItem}>
                        With a strong passion for self-learning, focused on developing technical skills
                        and solving problems in the world of technology.
                    </motion.p>

                    <motion.div className="hero-buttons" variants={heroItem}>
                        <a href="#contact" className="btn btn-primary hero-btn">
                            <FaEnvelope className="me-2"/>
                            Contact Me
                        </a>
                        {/*<a
              href="/cv.pdf"
              className="btn btn-outline-light hero-btn"
              download
            >
              <span className="me-2">⬇</span> Download CV
            </a>*/
                        }
                    </motion.div>

                    <motion.div className="hero-social" variants={heroItem}>
                        <a href="https://github.com/pedroNCA" target="_blank" rel="noreferrer">
                            <FaGithub/>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/pedro-jose-antonio-b65102163?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                            rel="noreferrer">
                            <FaLinkedin/>
                        </a>
                        <a href="https://instagram.com/pedro_derz" target="_blank" rel="noreferrer">
                            <FaInstagram/>
                        </a>
                    </motion.div>
                </motion.div>

                {/* KANAN: FOTO LINGKARAN */}
                <motion.div
                    className="hero-image-wrapper"
                    variants={heroImageVariants}
                    initial="hidden"
                    animate="visible">
                    <div className="hero-image-circle">
                        <img src="/profile.jpg" alt="Profile"/>
                    </div>

                    <div className="hero-badge hero-badge-solid">
                        <span role="img" aria-label="dev">
                            👨‍💻
                        </span>
                    </div>
                </motion.div>
            </div>

            <div className="scroll-indicator">
                <div className="scroll-wheel"/>
            </div>
        </section>
    );
}

function About() {
    return (
        <section id="about" className="section section-light">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true
                    }}
                    variants={fadeUp}>
                    <h2>Tentang Saya</h2>
                    <p>
                        Saya adalah seorang developer yang passionate dalam menciptakan solusi digital
                        inovatif. Dengan pengalaman dalam berbagai teknologi modern, saya siap membantu
                        mewujudkan ide Anda.
                    </p>
                </motion.div>

                <div className="row g-4 mt-4">
                    {
                        aboutCards.map((card, i) => (
                            <motion.div
                                key={card.title}
                                className="col-12 col-md-6 col-lg-3"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: true
                                }}
                                custom={0.1 * i}
                                variants={fadeUp}>
                                <div className="info-card">
                                    <div className="info-icon">{card.icon}</div>
                                    <h5>{card.title}</h5>
                                    <p>{card.text}</p>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

const aboutCards = [
    {
        title: "Basic Web Development",
        text: "Memahami dasar-dasar HTML, CSS, dan JavaScript untuk membuat halaman websederh" +
                "ana dan responsif",
        icon: "</>"
    }, {
        title: "Network Configuration",
        text: "Mengkonfigurasi dan mengelola jaringan dasar (routing, VLAN, firewall sederhan" +
                "a) untuk kebutuhan perusahaan atau lab.",
        icon: "📡"
    }, {
        title: "Troubleshooting & Monitoring",
        text: "Menganalisis dan menyelesaikan masalah pada web maupun jaringan dengan pendeka" +
                "tan yang terstruktur.",
        icon: "🛠"
    }, {
        title: "Continuous Learning",
        text: "Selalu belajar teknologi dan bahasa pemrograman baru dan siap berkolaborasi da" +
                "lam tim untuk mencapai tujuan bersama.",
        icon: "📚"
    }
];

function Skills() {
    return (
        <section id="skills" className="section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true
                    }}
                    variants={fadeUp}>
                    <h2>Skills &amp; Technologies</h2>
                    <p>
                        Beberapa teknologi yang sudah saya pelajari dan gunakan dalam project sederhana,
                        baik di bidang web development maupun jaringan.
                    </p>
                </motion.div>

                <div className="row g-4 mt-4">
                    {
                        skillsData.map((group, i) => (
                            <motion.div
                                key={group.title}
                                className="col-12 col-md-4"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: true
                                }}
                                custom={0.1 * i}
                                variants={fadeUp}>
                                <div className="skill-card">
                                    <h5>{group.title}</h5>
                                    {
                                        group
                                            .items
                                            .map((item) => (
                                                <div key={item.name} className="skill-item">
                                                    <div className="d-flex justify-content-between mb-1">
                                                        <span>{item.name}</span>
                                                        <span className="skill-percentage">{item.value}%</span>
                                                    </div>
                                                    <div className="skill-bar-bg">
                                                        <motion.div
                                                            className="skill-bar-fill"
                                                            initial={{
                                                                width: 0
                                                            }}
                                                            whileInView={{
                                                                width: `${item.value}%`
                                                            }}
                                                            transition={{
                                                                duration: 1.1,
                                                                ease: "easeOut",
                                                                delay: 0.1
                                                            }}
                                                            viewport={{
                                                                once: true
                                                            }}/>
                                                    </div>
                                                </div>
                                            ))
                                    }
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

const skillsData = [
    {
        title: "Web Development Basics",
        items: [
            {
                name: "HTML & Semantic Markup",
                value: 70
            }, {
                name: "CSS / Bootstrap",
                value: 65
            }, {
                name: "JavaScript Fundamental",
                value: 60
            }, {
                name: "React (Dasar)",
                value: 45
            }
        ]
    }, {
        title: "Backend & Database (Dasar)",
        items: [
            {
                name: "PHP / Laravel (Dasar)",
                value: 45
            }, {
                name: "MySQL / SQL",
                value: 55
            }, {
                name: "API & REST (Dasar)",
                value: 40
            }, {
                name: "Auth & CRUD Sederhana",
                value: 45
            }
        ]
    }, {
        title: "Networking & Tools",
        items: [
            {
                name: "IP Addressing & Subnetting",
                value: 70
            }, {
                name: "Routing & Switching (Dasar)",
                value: 60
            }, {
                name: "MikroTik / Cisco (Dasar)",
                value: 55
            }, {
                name: "Git & GitHub",
                value: 60
            }
        ]
    }
];

function Projects() {
    return (
        <section id="projects" className="section section-light">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true
                    }}
                    variants={fadeUp}>
                    <h2>Projects</h2>
                    <p>
                        Beberapa project yang telah saya kerjakan dengan berbagai teknologi modern.
                    </p>
                </motion.div>

                <div className="row g-4 mt-4">
                    {
                        projects.map((p, i) => (
                            <motion.div
                                key={p.title}
                                className="col-12 col-md-6 col-lg-4"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: true
                                }}
                                custom={0.1 * i}
                                variants={fadeUp}>
                                <div className="project-card">
                                    <div className="project-image">
                                        <img src={p.image} alt={p.title}/>
                                    </div>
                                    <div className="project-body">
                                        <h5>{p.title}</h5>
                                        <p>{p.desc}</p>
                                        <div className="project-tags">
                                            {
                                                p
                                                    .tags
                                                    .map((t) => (<span key={t}>{t}</span>))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

const projects = [
    {
        title: "Login Page Mikrotik Hotspot",
        desc: "Redesign halaman login Mikrotik Hotspot menjadi tampilan modern, responsif, da" +
                "n mudah digunakan.",
        image: "/project/hotspot.png",
        tags: ["HTML", "CSS", "Responsive UI", "Networking"]
    }, {
        title: "Redesign Website SMK Tiara Nusa",
        desc: "Perombakan tampilan website sekolah dengan fokus pada UI/UX yang lebih informa" +
                "tif dan mudah diakses.",
        image: "/project/web.png",
        tags: ["UI/UX", "HTML", "CSS", "School Website"]
    }, {
        title: "Aplikasi SPMB SMK Tiara Nusa",
        desc: "Sistem pendaftaran siswa baru berbasis website dengan fitur input data, verifi" +
                "kasi admin, dan laporan.",
        image: "/project/spmb.png",
        tags: ["PHP", "MySQL", "CRUD", "Admin Panel"]
    }, {
        title: "Aplikasi Pendaftaran Turnamen Futsal",
        desc: "Platform pendaftaran turnamen futsal secara online, mendukung pembuatan tim da" +
                "n verifikasi peserta.",
        image: "/project/futsal.png",
        tags: ["PHP", "MySQL", "Bootstrap", "CRUD"]
    }, {
        title: "Website Bimbingan Konseling Daring",
        desc: "Website layanan BK untuk konsultasi online, pemesanan jadwal, dan pencatatan r" +
                "iwayat konseling.",
        image: "/project/conseling.png",
        tags: ["PHP", "MySQL", "Form System", "BK Online"]
    }
];

function Contact() {
    return (
        <section id="contact" className="section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true
                    }}
                    variants={fadeUp}>
                    <h2>Get In Touch</h2>
                    <p>
                        Tertarik untuk berkolaborasi atau punya pertanyaan seputar project? Silakan
                        hubungi saya melalui form di samping atau lewat sosial media di bawah ini.
                    </p>
                </motion.div>

                <div className="row g-4 mt-4">
                    {/* KIRI: SOCIAL CONTACT */}
                    <motion.div
                        className="col-12 col-lg-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true
                        }}
                        variants={fadeUp}>
                        <div className="contact-info-card">
                            <h5 className="contact-info-title">Temukan Saya</h5>
                            {/*<p className="contact-info-subtitle">
                Lebih sering aktif di Instagram dan GitHub, tapi LinkedIn juga
                selalu saya cek secara berkala.
              </p>*/
                            }

                            <ContactItem
                                icon={<FaInstagram />}
                                label="Instagram"
                                value="@pedro_derz"
                                href="https://instagram.com/pedro_derz"/>
                            <ContactItem
                                icon={<FaGithub />}
                                label="GitHub"
                                value="pedroNCA"
                                href="https://github.com/pedroNCA"/>
                            <ContactItem
                                icon={<FaLinkedin />}
                                label="LinkedIn"
                                value="Pedro Jose Antonio"
                                href="https://www.linkedin.com/in/pedro-jose-antonio-b65102163"/>
                        </div>
                    </motion.div>

                    {/* KANAN: FORM */}
                    <motion.div
                        className="col-12 col-lg-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true
                        }}
                        custom={0.1}
                        variants={fadeUp}>
                        <form className="contact-form">
                            <div className="row g-3">
                                <div className="col-12 col-md-6">
                                    <label className="form-label">Nama</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Tuliskan nama Anda"
                                        required="required"/>
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="emailanda@mail.com"
                                        required="required"/>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Pesan</label>
                                    <textarea
                                        className="form-control"
                                        rows="5"
                                        placeholder="Tulis pesan Anda di sini..."
                                        required="required"/>
                                </div>
                                <div className="col-12 d-flex justify-content-end">
                                    <button type="submit" className="btn btn-primary contact-btn">
                                        Kirim Pesan
                                    </button>
                                </div>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function ContactItem({icon, label, value, href}) {
    return (
        <a href={href} target="_blank" rel="noreferrer" className="contact-item-link">
            <div className="contact-item">
                <div className="contact-icon">{icon}</div>
                <div>
                    <div className="contact-label">{label}</div>
                    <div className="contact-value">{value}</div>
                </div>
            </div>
        </a>
    );
}

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-inner">

                <div className="footer-top">
                    <div className="footer-brand">
                        <h5>Pedro Jose Antonio</h5>
                        <p>Junior Web Developer &amp; Junior Network Engineer</p>
                    </div>

                    <nav className="footer-nav">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </nav>

                    <div className="footer-social">
                        <a href="https://github.com/pedroNCA" target="_blank" rel="noreferrer"><FaGithub/></a>
                        <a
                            href="https://linkedin.com/in/pedro-jose-antonio-b65102163"
                            target="_blank"
                            rel="noreferrer"><FaLinkedin/></a>
                        <a href="https://instagram.com/pedro_derz" target="_blank" rel="noreferrer"><FaInstagram/></a>
                    </div>
                </div>

                <div className="footer-bottom">
                    © {year}
                    Pedro Jose. All rights reserved.
                    <span>•</span>
                    <span>Made with
                        <span className="heart">❤</span>
                    </span>
                </div>

            </div>
        </footer>
    );
}

export default App;
