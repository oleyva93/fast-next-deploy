import Link from "next/link";
import LikeButton from "@/components/likeButon";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button className="p-3 rounded text-black transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
        <Link href="/dashboard"> dashboard</Link>
      </button>
      <button className="p-3 rounded text-black transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
        <Link href="/dashboard"> dashboard</Link>
      </button>
      <card>
        <LikeButton />
      </card>
      <card>askdjaksjdhalsda</card>
      <card>askdjaksjdhalsda</card>
      <card>askdjaksjdhalsda</card>
      <card>askdjaksjdhalsda</card>
      <card>askdjaksjdhalsda</card>
      <card>askdjaksjdhalsda</card>
      <card>askdjaksjdhalsda</card>
    </main>
  );
}
