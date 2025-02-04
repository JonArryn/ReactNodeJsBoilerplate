interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date | null;
  deleted_at: Date | null;
}

interface UserResource {
  id: number;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date | null;
  deleted_at: Date | null;
}
