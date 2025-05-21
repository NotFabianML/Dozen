import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const data = [
  { name: "Jan", documents: 12, invoices: 8, quotes: 4 },
  { name: "Feb", documents: 18, invoices: 10, quotes: 8 },
  { name: "Mar", documents: 15, invoices: 7, quotes: 8 },
  { name: "Apr", documents: 25, invoices: 15, quotes: 10 },
  { name: "May", documents: 20, invoices: 12, quotes: 8 },
  { name: "Jun", documents: 30, invoices: 18, quotes: 12 },
  { name: "Jul", documents: 22, invoices: 13, quotes: 9 },
];

export function UsageChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorDocuments" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorInvoices" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.8} />
            <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorQuotes" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--secondary))" stopOpacity={0.8} />
            <stop offset="95%" stopColor="hsl(var(--secondary))" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis
          dataKey="name"
          className="text-xs text-muted-foreground"
        />
        <YAxis
          className="text-xs text-muted-foreground"
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            borderColor: "hsl(var(--border))",
            borderRadius: "var(--radius)",
            color: "hsl(var(--card-foreground))",
          }}
          itemStyle={{ color: "currentColor" }}
        />
        <Area
          type="monotone"
          dataKey="documents"
          stroke="hsl(var(--primary))"
          fillOpacity={1}
          fill="url(#colorDocuments)"
        />
        <Area
          type="monotone"
          dataKey="invoices"
          stroke="hsl(var(--accent))"
          fillOpacity={1}
          fill="url(#colorInvoices)"
        />
        <Area
          type="monotone"
          dataKey="quotes"
          stroke="hsl(var(--secondary))"
          fillOpacity={1}
          fill="url(#colorQuotes)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}