import { Card } from "@/components/ui/card";

export function NotificationList() {
  return (
    <Card>
      <h2 className="text-xl font-black">Notifications</h2>
      {["KoriPay a consulté votre candidature", "3 nouvelles offres correspondent à votre profil", "Votre profil est complété à 86%"].map((item) => (
        <div key={item} className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm font-medium text-slate-700">{item}</div>
      ))}
    </Card>
  );
}
