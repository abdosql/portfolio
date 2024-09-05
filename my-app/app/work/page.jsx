'use client';

import { useState, useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import BackgroundAnimation from '@/components/BackgroundAnimation';

const Work = () => {
  const [showContent, setShowContent] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1400); // Match this duration with the stairs effect duration (1s delay + 0.4s duration)

    return () => clearTimeout(timer);
  }, []);

  const projects = [
    { 
      id: 1, 
      title: "SQLI AI-Enhanced Interview Management System", 
      date: "Jul 2024 - Aug 2024",
      association: "SQLI",
      description: "Développement d'un système de gestion d'entretiens innovant pour SQLI, intégrant une architecture logicielle avancée et une intégration de l'IA. Construit avec Symfony 7 et PHP 8.2, ce système utilise l'architecture CQRS, plusieurs modèles de conception et une interface d'administration personnalisée pour une solution robuste et efficace.",
      media: [
        { type: 'image', src: "/path/to/interview-system-image1.jpg" },
        { type: 'image', src: "/path/to/interview-system-image2.jpg" },
        // Add more media items as needed, including videos
      ],
      link: '#',
      features: [
        "Gestion intelligente des utilisateurs basée sur les rôles",
        "Planification avancée des entretiens avec intégration de calendrier",
        "Gestion simplifiée des candidats avec traitement des CV",
        "Processus d'évaluation assisté par IA",
        "Synchronisation des données en temps réel via RabbitMQ"
      ],
      technologies: [
        "Backend : Symfony 7, PHP 8.2",
        "Bases de données : MySQL (Écriture), MongoDB (Lecture)",
        "Frontend : EasyAdmin 4 personnalisé, Twig, JavaScript, Bootstrap",
        "API : API Platform 3",
        "File de messages : RabbitMQ avec Symfony Messenger",
        "IA : Intégration de modèles de langage (LLM)"
      ],
      architecture: [
        "CQRS (Command Query Responsibility Segregation)",
        "Modèles de conception : Repository, Factory, Strategy, Decorator, Adapter, Singleton, Command, Facade, et Transformer"
      ],
      highlights: [
        "Principes de conception pilotée par le domaine (Domain-Driven Design)",
        "Architecture en microservices",
        "Programmation asynchrone pour des performances accrues",
        "Interface EasyAdmin hautement personnalisée",
        "Conteneurisation avec Docker pour un développement et un déploiement cohérents"
      ],
      skills: "Symfony 7 Framework · CQRS Architecture · Event-Driven Architecture · MySQL · MongoDB · ORM/ODM · Doctrine (PHP) · API Development · API Platform 3 · RESTful API design · Message Queue Systems · RabbitMQ · Symfony Messenger · EasyAdmin 4 · Twig templating · JavaScript · Bootstrap · Large Language Models (LLM) · AI-assisted evaluation systems · Webpack Encore · Docker · Microservices Architecture · Asynchronous Programming · Real-time Data Synchronization · File Upload and Management · Calendar Integration · Performance Optimization · Scalable System Design · Software Testing · Version Control · Technical Documentation",
    },
    { 
      id: 2, 
      title: "Système de Recommandation de Produits Personnalisés", 
      date: "Jun 2024 - Jun 2024",
      description: "J'ai développé un système sophistiqué de recommandation de produits personnalisés en utilisant une pile hybride de Symfony pour le backend et Flask pour le moteur de recommandation. Le cœur du système est alimenté par la similarité cosinus, une technique puissante pour le filtrage collaboratif.",
      media: [
        { type: 'image', src: "/path/to/recommendation-system-image1.jpg" },
        { type: 'image', src: "/path/to/recommendation-system-image2.jpg" },
        // Add more media items as needed, including videos
      ],
      link: '#',
      features: [
        "Backend: Construit avec Symfony, gérant les interactions des utilisateurs, le stockage des données et la logique métier.",
        "Moteur de Recommandation: Implémenté en Flask, utilisant la similarité cosinus pour analyser les données d'interaction et générer des recommandations personnalisées.",
        "Gestion des Données: Les interactions des utilisateurs sont capturées par Symfony, transformées en un format adapté à l'analyse, et envoyées à l'API Flask pour l'entraînement du modèle.",
        "Entraînement du Modèle: L'API Flask traite les données d'interaction, entraîne le modèle en utilisant la similarité cosinus et stocke le modèle pour des prédictions futures.",
        "Communication API: Symfony communique avec l'API Flask pour envoyer les interactions des utilisateurs et récupérer des recommandations personnalisées.",
        "Interface Utilisateur: Les utilisateurs reçoivent des recommandations de produits personnalisées en fonction de leurs interactions, améliorant leur expérience d'achat."
      ],
      skills: "Event-Driven Architecture · Data Modeling · Cosine Similarity · Data Analysis"
    },
    { 
      id: 3, 
      title: "Système de Gestion Scolaire FaceGuard (Projet PFA)", 
      date: "Dec 2023 - May 2024",
      association: "EHEI Oujda",
      description: "Automatiser et améliorer les flux de travail des étudiants, des enseignants et de l'administration en générant automatiquement des groupes et des emplois du temps, et en suivant la présence des étudiants à l'aide de cartes RFID.",
      media: [
        { type: 'image', src: "/path/to/faceguard-image1.jpg" },
        { type: 'image', src: "/path/to/faceguard-image2.jpg" },
        { type: 'video', src: "/path/to/faceguard-demo-video.mp4" }
      ],
      link: '#',
      features: [
        "Développer l'interface utilisateur et le système backend.",
        "Créer un algorithme pour la génération automatique de groupes et d'emplois du temps.",
        "Intégrer des composants matériels à l'aide d'Arduino et de lecteurs RFID.",
        "Afficher la présence en classe à l'aide d'un écran LCD."
      ],
      technologies: ["Symfony", "Flask", "Arduino", "RFID"],
      results: "Productivité accrue et automatisation complète des tâches de gestion scolaire.",
      futurePlans: "Transition vers la reconnaissance faciale pour un suivi optimal de la présence, en accord avec le nom du projet, FaceGuard.",
      skills: "Algorithm Design · API Development · Flask Framework · Arduino Programming · RFID Technology · Serial Communications · Automation · Hardware Integration · Problem-Solving · Innovation"
    },
    { 
      id: 4, 
      title: "Moteur de Recherche Web Avancé avec Symfony et BERT pour l'Encodage de Mots", 
      date: "Dec 2023 - Jan 2024",
      association: "EHEI Oujda",
      description: "Développement d'une application web sophistiquée utilisant Symfony et Python, améliorée par le modèle BERT (Bidirectional Encoder Representations from Transformers) pour l'encodage de mots, offrant une fonctionnalité de recherche avancée.",
      media: [
        { type: 'image', src: "/path/to/search-engine-image1.jpg" },
        { type: 'image', src: "/path/to/search-engine-image2.jpg" },
        { type: 'image', src: "/path/to/Parametre.png" },
        { type: 'image', src: "/path/to/Homepage.png" },
        // Add more media items as needed, including videos
      ],
      link: '#',
      features: [
        "Intégration de BERT pour l'Encodage de Mots : Utilisation du modèle BERT pour fournir des résultats de recherche précis et contextuellement pertinents.",
        "Objet Processus Symfony : Gestion de la transmission des données du formulaire de recherche au script backend Python.",
        "Script Python Personnalisé : Traitement des fichiers texte, tokenisation et encodage des phrases avec BERT, et calcul de la similarité cosinus pour trouver les résultats de recherche les plus pertinents."
      ],
      technologies: ["Symfony", "BERT (Modèle d'Encodage de Mots)", "Python", "PyTorch", "JavaScript", "HTML", "CSS"],
      skills: "Symfony Framework · Python (Programming Language) · BERT (Language Model) · Natural Language Processing (NLP) · Back-End Web Development · Web Development · Machine Learning · PyTorch · Data Processing · Text Processing · Software Architecture · Git · Problem Solving · Data Analysis"
    },
    { 
      id: 5, 
      title: "Création d'un Framework MVC Robuste pour PHP (ANH Framework)", 
      date: "Aug 2023 - Sep 2023",
      description: "J'ai développé un cadre Model-View-Controller (MVC) personnalisé visant à simplifier le développement d'applications PHP tout en priorisant l'efficacité et la sécurité.",
      media: [
        { type: 'image', src: "/path/to/anh-framework-image1.jpg" },
        { type: 'image', src: "/path/to/anh-framework-image2.jpg" },
        // Add more media items as needed, including videos
      ],
      link: '#',
      features: [
        "Fonctionnalités essentielles du cadre MVC : Modèles, Vues et Contrôleurs, englobant la manipulation des données, le rendu et la gestion des requêtes.",
        "Moteur de Templating : Assuré la séparation des préoccupations pour une meilleure organisation du code et une réutilisabilité.",
        "Validation et Assainissement : Maintenu l'intégrité des données et amélioré la sécurité.",
        "Authentification et Autorisation : Géré les sessions utilisateur et contrôlé l'accès aux ressources.",
        "Fonctionnalités de Sécurité : Mis en place des mécanismes contre les vulnérabilités web courantes."
      ],
      impact: "Amélioration significative de l'efficacité du développement, de la maintenabilité du code, de l'évolutivité et de la sécurité des applications PHP.",
      skills: "MVC Architecture · Database Management · Templating · Data Validation and Security · Advanced Routing · Project Management"
    },
    { 
      id: 6, 
      title: "Système de gestion de restaurant (Projet fin de modules)", 
      description: "Le projet comprend un site web de restaurant, une application console de gestion des commandes, et une application de bureau pour la gestion des opérations. Chaque application vise à répondre à des besoins spécifiques du restaurant, offrant ainsi une solution complète et intégrée.", 
      media: [
        { type: 'image', src: "/path/to/restaurant-system-image1.jpg" },
        { type: 'image', src: "/path/to/restaurant-system-image2.jpg" },
        // Add more media items as needed, including videos
      ],
      link: '#',
      components: [
        "Site web de restaurant",
        "Application console de gestion des commandes",
        "Application de bureau pour la gestion des opérations"
      ]
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative min-h-screen">
      <BackgroundAnimation className="fixed inset-0 z-0" />
      <div className="relative z-10 container mx-auto py-12">
        {showContent && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className="h1 mb-8 text-center xl:text-left text-gray-900 dark:text-[#e5e7eb]">My Work</motion.h1>
            <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map(project => (
                <motion.div key={project.id} variants={itemVariants}>
                  <ProjectCard {...project} onViewDetails={() => openModal(project)} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Work;