export interface User {
    user_id: string;
    first_name?: string;
    last_name?: string;
    email: string;
    password: string;
    phone?: string;
    adress?:string,
    cb?:string,
    status?: string;
    lastConnection?: Date;
  }
  