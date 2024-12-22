"use client"
import { UserProfileProps } from "./Profile.types";
import { useAuth } from "@/context/AuthProvider";

const UserProfile: React.FC = () => {
  const { user, isAuthenticated } = useAuth();

  return (
      <div className="flex items-center space-x-4 p-4">
        <div className="w-16 h-16 rounded-full object-cover" />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            {user?.first_name} {user?.last_name}
          </h2>
          <p className="text-gray-600">{user?.email}</p>
        </div>
      </div>
  );
};

export default UserProfile;
