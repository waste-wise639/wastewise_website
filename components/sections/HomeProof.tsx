import StatsCounter from '@/components/ui/StatsCounter';
import { ArrowRight, Briefcase, Building2, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';

export default function HomeProof() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">Results</p>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">Proof, not promises</h2>
            <div className="mt-8 rounded-3xl bg-gray-50 p-8 ring-1 ring-gray-200">
              <p className="text-3xl italic leading-tight text-gray-900">
                “LexBridge brought clarity fast. Within one quarter, our operating cadence improved and our leadership team finally aligned.”
              </p>
              <div className="mt-6">
                <p className="text-base font-semibold text-gray-900">Ava Sinclair</p>
                <p className="text-sm text-gray-600">COO, Northgate Industrial</p>
              </div>
              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-blue-100 bg-white px-5 py-4">
                <div className="text-4xl font-bold text-gray-900">+25%</div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Outcome</p>
                  <p className="text-sm text-gray-600">Measured efficiency gain after process redesign</p>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/testimonials" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition-colors hover:text-blue-700">
                  See more stories
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-gray-50 to-white p-6 ring-1 ring-gray-200 shadow-sm">
            <StatsCounter
              stats={[
                { value: 25, suffix: '%', label: 'Efficiency gains', icon: <TrendingUp className="h-8 w-8 text-blue-600" /> },
                { value: 90, suffix: '%', label: 'Client retention', icon: <Users className="h-8 w-8 text-blue-600" /> },
                { value: 40, suffix: '+', label: 'Engagements delivered', icon: <Briefcase className="h-8 w-8 text-blue-600" /> },
                { value: 12, suffix: '+', label: 'Industries served', icon: <Building2 className="h-8 w-8 text-blue-600" /> }
              ]}
              duration={1800}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
