# Stagium

**Stagium** est une plateforme SaaS moderne et intelligente de gestion des stages académiques et d’insertion professionnelle étudiante. Le MVP connecte étudiants, entreprises et administrateurs autour d’un workflow sécurisé : profils professionnels, offres de stage, candidatures, dashboards, notifications et recommandations intelligentes.

## Vision produit

Stagium n’est pas un simple CRUD académique. L’objectif est de proposer une base crédible pour une soutenance professionnelle, un portfolio haut niveau et une évolution startup EdTech/HRTech :

- expérience premium inspirée de LinkedIn, Notion, Linear, Vercel et Stripe Dashboard ;
- architecture API-first, modulaire, maintenable et scalable ;
- scoring étudiant ↔ stage explicable, prêt à évoluer vers IA avancée ;
- sécurité SaaS : JWT, refresh tokens, RBAC, validation stricte, rate limiting et headers sécurité ;
- déploiement local reproductible via Docker Compose.

## Stack technique

### Frontend

- Next.js 15, React 19, TypeScript strict
- Tailwind CSS, composants style shadcn/ui, Framer Motion
- React Hook Form, Zod
- TanStack Query, Zustand, Axios

### Backend

- Laravel 12 API
- Clean Architecture légère par modules métier
- Controller → Service → Repository → DTO
- REST API versionnée `/api/v1`
- JWT Auth, RBAC, email verification-ready, refresh-token storage

### Base de données

- PostgreSQL 16
- UUID, indexes, contraintes relationnelles
- JSONB pour profils évolutifs, tags, payloads de notifications

## Structure du projet

```txt
frontend/                 # Application Next.js 15
  app/                    # App Router : public, auth, dashboards par rôle
  components/             # Layout, sections, UI réutilisable
  features/               # Modules frontend métier
  services/               # Axios API client
  hooks/                  # TanStack Query hooks
  stores/                 # Zustand stores
  validators/             # Zod schemas
backend/                  # API Laravel 12
  app/Modules/            # Auth, Students, Companies, Internships, Applications, Matching, Notifications, Admin
  app/Support/            # Réponses API uniformes
  database/migrations/    # Schéma PostgreSQL
  routes/api.php          # API v1
docs/architecture.md      # Décisions techniques et ERD
docker-compose.yml        # Frontend + API + PostgreSQL
```

## Pages incluses

### Public

- Landing page startup premium
- Login
- Register étudiant/entreprise
- Liste des offres
- Détail offre
- Entreprises partenaires

### Étudiant

- Dashboard étudiant
- Profil mini-LinkedIn
- Candidatures
- Recommandations
- Paramètres

### Entreprise

- Dashboard entreprise
- Offres
- Candidats
- Paramètres

### Admin

- Dashboard admin
- Utilisateurs
- Analytics
- Modération

## API MVP

| Méthode | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/auth/register` | Inscription étudiant ou entreprise |
| POST | `/api/v1/auth/login` | Connexion JWT |
| GET | `/api/v1/auth/me` | Session courante |
| POST | `/api/v1/auth/logout` | Logout |
| POST | `/api/v1/auth/refresh` | Renouvellement token |
| GET | `/api/v1/internships` | Recherche paginée et filtrée |
| POST | `/api/v1/internships` | Publication d’offre entreprise |
| GET | `/api/v1/applications` | Candidatures étudiant |
| POST | `/api/v1/internships/{id}/applications` | Postuler |
| GET | `/api/v1/recommendations` | Recommandations matchées |
| GET | `/api/v1/admin/analytics` | Analytics admin |

## Lancement local

### Avec Docker

```bash
docker compose up --build
```

- Frontend : <http://localhost:3000>
- API : <http://localhost:8000/api/v1>
- PostgreSQL : `localhost:5432`

### Frontend seul

```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

### Backend seul

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan jwt:secret
php artisan migrate --seed
php artisan serve
```

## Matching intelligent MVP

Le moteur actuel calcule un score pondéré entre :

- compétences étudiant ↔ tags offre ;
- domaine préféré ;
- villes préférées ;
- mode préféré : remote, hybride ou présentiel.

Le service est volontairement isolé dans `backend/app/Modules/Matching/Services/MatchingService.php` pour permettre une future évolution vers parsing CV, embeddings vectoriels, LLM career assistant, scoring ATS et recommandations personnalisées.

## Sécurité

- Validation stricte côté frontend avec Zod et côté backend avec DTO rules Laravel
- JWT + refresh-token table
- RBAC par rôles `student`, `company`, `admin`
- Rate limiting API
- Headers sécurité
- Hash de mot de passe Laravel
- Upload documents limité aux formats bureautiques attendus

## Documentation

Consultez [`docs/architecture.md`](docs/architecture.md) pour le diagramme relationnel, les décisions d’architecture et la segmentation des modules.

## Auteur

Bryan Seidy — Software Engineering Student & Fullstack Developer
