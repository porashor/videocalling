export interface UserHandleState {
  // state values
  signOrLog: boolean;
  loading: boolean;
  showPass: boolean;
  userOrEmail: boolean;
  name: string;
  email: string;
  password: string;
  user: Record<string | number, any>; // or a specific User type if you have one
  phone: string;
  address: string;
  about: string;
  service: string;
  profilePic: string;
  coverPic: string;

  // setters
  setPhone: (a: string) => void;
  setAddress: (a: string) => void;
  setAbout: (a: string) => void;
  setService: (a: string) => void;
  setProfilePic: (a: string) => void;
  setCoverPic: (a: string) => void;
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
    email: string,
    phone: string,
    address: string,
    about: string,
    service: string,
    profilePic: string,
    coverPic: string
  ) => Promise<void>;
}
