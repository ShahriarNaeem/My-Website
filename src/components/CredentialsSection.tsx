import React from 'react';
import { Award, Users, CheckCircle, Mail, Phone, ExternalLink, Shield } from 'lucide-react';
import { CERTIFICATIONS, VOLUNTEERING_ACTIVITIES, REFERENCES } from '../data/portfolioData';

export const CredentialsSection: React.FC = () => {
  return (
    <section id="credentials" className="py-16 sm:py-24 bg-slate-50/60 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-2">
            Professional Endorsement & Continuous Learning
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Professional Certifications & Community Leadership
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2">
            Continuous development with international engineering bodies, Six Sigma, and civic sustainability initiatives.
          </p>
        </div>

        {/* 2-Column Grid: Certifications vs Volunteering */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Certifications & Training */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
              <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Professional Certifications & Diplomas</span>
            </div>

            <div className="space-y-3">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.title}
                  className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-2xs flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono font-medium text-slate-400 dark:text-slate-500">
                        {cert.periodOrDate}
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug mt-0.5">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-blue-700 dark:text-blue-400 font-medium mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Volunteering & Leadership */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
              <Users className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Volunteering & Community Leadership</span>
            </div>

            <div className="space-y-3">
              {VOLUNTEERING_ACTIVITIES.map((act) => (
                <div
                  key={act.organization + act.role}
                  className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-2xs"
                >
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                    <span className="font-bold text-slate-900 dark:text-white">{act.role}</span>
                    <span className="font-mono text-slate-400 dark:text-slate-500 text-[11px]">{act.period}</span>
                  </div>
                  <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                    {act.organization}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-normal">
                    {act.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
