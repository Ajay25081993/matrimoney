import  { QRCodeCanvas } from "qrcode.react";

const profileData = {
  name: "Rudra Deb",
  age: 25,
  height: "5'9\"",
  imageUrl: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?ga=GA1.1.1426186378.1750559581&semt=ais_items_boosted&w=740",
  about: "I enjoy meaningful conversations.",
};

export default function GenerateQR() {
  return (
    <div className="p-4">
      <QRCodeCanvas value={JSON.stringify(profileData)} size={220} />
      <p className="mt-2">Scan this QR to view profile</p>
    </div>
  );
}
