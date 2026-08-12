/*
 * Roast & Ritual — ProfileCard
 * Editorial profile block: circular avatar with caramel ring,
 * serif name, and membership stat row.
 */
export default function ProfileCard({
  name = "Sarah Miller",
  tier = "Gold Member",
  avatar = "/assets/logo-mark_30cba49d.png",
  points = 1240,
  orders = 23,
}) {
  return (
    <div className="warm-shadow rounded-3xl bg-card p-5">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent p-3 ring-2 ring-caramel/40">
            <img
              src={avatar}
              alt={`${name} avatar`}
              className="h-full w-full rounded-full object-contain"
            />
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full bg-caramel ring-2 ring-card" />
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-foreground">{name}</h2>
          <p className="mt-0.5 flex items-center gap-1.5 text-sm font-medium text-caramel">
            <span className="h-1.5 w-1.5 rounded-full bg-caramel" />
            {tier}
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-secondary px-4 py-3">
          <p className="font-display text-xl font-semibold text-foreground">{points}</p>
          <p className="mt-0.5 text-xs text-muted-foreground">Loyalty points</p>
        </div>
        <div className="rounded-2xl bg-secondary px-4 py-3">
          <p className="font-display text-xl font-semibold text-foreground">{orders}</p>
          <p className="mt-0.5 text-xs text-muted-foreground">Orders placed</p>
        </div>
      </div>
    </div>
  );
}
