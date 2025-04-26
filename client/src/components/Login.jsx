import { User } from "lucide-react";
export default function Login() {
  // state for check is login or register data.. like Singup or login

  return (
    <div className="absolute top-0 left-0 right-0  bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form>
        <h1>Sign In</h1>
        <p>Welcome back! Please sign in to continue</p>
        <div>
          <User />
          <input type="text" placeholder="Full Name" required />
        </div>
      </form>
    </div>
  );
}
