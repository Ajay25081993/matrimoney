export default function ProfileCard({ data }) {
  const profile = JSON.parse(data);

  return (
    <div className="p-4 w-80 bg-white rounded-xl shadow-lg space-y-3 text-center">
      <img
        src={profile.imageUrl}
        alt="Profile"
        className="w-32 h-32 mx-auto rounded-full object-cover"
      />
      <h2 className="text-xl font-bold">{profile.name}</h2>
      <p>🎂 {profile.age} years</p>
      <p>📏 {profile.height}</p>
      <p className="text-gray-600">💬 {profile.about}</p>
    </div>
  );
}
