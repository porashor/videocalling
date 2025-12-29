export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  about?: string;
  service?: string;
  profilePic?: string;
  coverPic?: string;
}





export interface UserHandleState {
  // state values
  signOrLog: boolean;
  loading: boolean;
  showPass: boolean;
  userOrEmail: boolean;
  name: string;
  email: string;
  password: string;
  user: User | null; // or a specific User type if you have one
  phone: string;
  address: string;
  about: string;
  service: string;
  profilePic: File | null;
  coverPic: File | null;

  // setters
  setPhone: (a: string) => void;
  setAddress: (a: string) => void;
  setAbout: (a: string) => void;
  setService: (a: string) => void;
  setProfilePic: (a: File) => void;
  setCoverPic: (a: File) => void;
  setUserOrEmail: (a: boolean) => void;
  setShowPass: (a: boolean) => void;
  setSignOrLog: (a: boolean) => void;
  setName: (a: string) => void;
  setEmail: (a: string) => void;
  setPassword: (a: string) => void;

  // async actions
  Sigin: (
    e: React.FormEvent<HTMLFormElement>,
    name: string,
    email: string,
    password: string
  ) => Promise<void>;

  LogIn: (
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => Promise<void>;

  LogOut: () => Promise<void>;

  getUser: () => Promise<void>;

  updateProfile: (
    e: React.FormEvent<HTMLFormElement>,
    phone: string,
    address: string,
    about: string,
    service: string,
    profilePic: File,
    coverPic: File,
  ) => Promise<void>;
}
