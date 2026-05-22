export interface Category {
  id: number;
  name: string;
  createdAt: string;
}

export interface CategoryFormData {
  name: string;
}


export interface Pembicara {
  id: number;
  name: string;
  title: string;
  bio: string;
  photo: string;
  expertise: string[];
  createdAt: string;
}

export interface PembicaraFormData {
  name: string;
  title: string;
  bio: string;
  photo?: string;
  expertise?: string[];
}


export interface Event {
  id: number;
  name: string;
  categoryId: number;
  pembicaraId: number;
  location: string;
  dateEvent: string;
  description: string;
  createdAt: string;
  category?: Category;
  pembicara?: Pembicara;
}

export interface EventFormData {
  name: string;
  categoryId: number;
  pembicaraId: number;
  location: string;
  dateEvent: string;
  description: string;
}


export interface User {
  id: number;
  name: string;
  nim: string;
  bio: string;
  event: string;
  photo?: string;
  createdAt: string;
}

export interface LoginRequest {
  nim: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  user: User;
  token: string;
}


export interface ApiResponse<T> {
  message: string;
  data: T;
}
