'use client';

import { motion } from 'framer-motion';
import Image from 'next/image'; 

export default function AboutHero() {
return (
    <section className="bg-black text-white py-5 px-3 min-vh-100 d-flex align-items-center " id='about'>
        <div className="container">
            <div className="row align-items-center gy-4">
                
                <motion.div
                    className="col-lg-5 text-center"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Image
                        src="/mypic.jpeg"
                        alt="Priyanshu"
                        width={300}
                        height={300}
                        className="rounded-circle img-fluid shadow"
                        priority
                    />
                </motion.div>

                <motion.div
                    className="col-lg-7"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-primary fw-bold mb-3">About Me</h2>
                    <p className="mb-4 fs-5">
                        Hello! I'm <strong>RIJIK SHARMA</strong>, a passionate Computer Science student with a strong foundation in programming fundamentals. I'm currently exploring various aspects of software development and constantly learning new technologies.
                    </p>

                    <div className="mb-4">
                        <h5 className="text-secondary fw-semibold">Education</h5>
                        <p className="mb-1">🎓 Computer Science Student</p>
                        <p className="text-muted">Currently pursuing my degree</p>
                    </div>

                    <div className="mb-4">
                        <h5 className="text-secondary fw-semibold">Core Knowledge</h5>
                        <div className="d-flex flex-wrap gap-3 mb-2">
                            <div className="card bg-dark text-white border-0 shadow-sm px-3 py-2" style={{ minWidth: '180px' }}>
                                <div className="card-body p-0 d-flex align-items-center gap-2">
                                    <span>🧠</span>
                                    <span>Web development</span>
                                </div>
                            </div>
                            <div className="card bg-dark text-white border-0 shadow-sm px-3 py-2" style={{ minWidth: '180px' }}>
                                <div className="card-body p-0 d-flex align-items-center gap-2">
                                    <span>🧩</span>
                                    <span>Problem Solving</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-wrap gap-3 mb-2">
                            <div className="card bg-dark text-white border-0 shadow-sm px-3 py-2" style={{ minWidth: '180px' }}>
                                <div className="card-body p-0 d-flex align-items-center gap-2">
                                    <span>💻</span>
                                    <span>Java — Fundamentals</span>
                                </div>
                            </div>
                            <div className="card bg-dark text-white border-0 shadow-sm px-3 py-2" style={{ minWidth: '180px' }}>
                                <div className="card-body p-0 d-flex align-items-center gap-2">
                                    <span>⚛️</span>
                                    <span>React — Complete</span>
                                </div>
                            </div>
                            <div className="card bg-dark text-white border-0 shadow-sm px-3 py-2" style={{ minWidth: '180px' }}>
                                <div className="card-body p-0 d-flex align-items-center gap-2">
                                    <span>🗄️</span>
                                    <span>DBMS — Database Concepts</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h5 className="text-secondaryd fw-semibold">Currently Learning</h5>
                        <p className="text-muted">
                            I'm actively learning web development fundamentals and exploring new programming concepts. My goal is to build a strong foundation in software development.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);
}
