export type Role = "student" | "company" | "admin";

export type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatarUrl?: string;
  emailVerifiedAt?: string;
};

export type Internship = {
  id: string;
  title: string;
  company: string;
  city: string;
  domain: string;
  mode: "remote" | "hybrid" | "onsite";
  type: "academic" | "professional" | "pre-employment";
  stipend?: number;
  tags: string[];
  matchScore?: number;
  publishedAt: string;
  description: string;
};

export type ApplicationStatus = "sent" | "viewed" | "reviewing" | "accepted" | "rejected";

export type Application = {
  id: string;
  internship: Internship;
  status: ApplicationStatus;
  createdAt: string;
};

export type DashboardMetric = {
  label: string;
  value: string;
  trend: string;
};
