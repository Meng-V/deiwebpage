import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

import { team } from '@/constants/team'


function Team() {
  return (
    <Container className="mt-12 lg:mt-20">
      <h2>Miami University Libraries' Diversity, Equity, and Inclusion Committee</h2>
      <div className="space-y-24 mt-12">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h3 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h3>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100 xs:mx-20 sm:mx-0">
                          <img
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white m-0">
                              {person.name} 
                            </p>
                            {person.pron?
                            <p className='text-sm text-white m-0'>
                            ({person.pron})
                            </p> :
                            <span></span>}
                            <p className="mt-1 text-white m-0">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}


import logoBrightPath from '@/public/clients/bright-path/logo-dark.svg'
import logoFamilyFund from '@/public/clients/family-fund/logo-dark.svg'
import logoGreenLife from '@/public/clients/green-life/logo-dark.svg'
import logoHomeWork from '@/public/clients/home-work/logo-dark.svg'
import logoMailSmirk from '@/public/clients/mail-smirk/logo-dark.svg'
import logoNorthAdventures from '@/public/clients/north-adventures/logo-dark.svg'
import logoPhobia from '@/public/clients/phobia/logo-dark.svg'
import logoUnseal from '@/public/clients/unseal/logo-dark.svg'
import { SectionIntro } from '@/components/SectionIntro'
import { GridList, GridListItem } from '@/components/GridList'
import clsx from 'clsx'

const clients = [
  ['FY21 Annual Report', logoPhobia],
  ['FY22 Annual Report', logoFamilyFund],
  ['FY23 Annual Report', logoUnseal],
]


function Clients() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2>
        {/* Committee Information */}
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <Border as={FadeIn} />
      </FadeInStagger>
    </Container>
  )
}


export default async function About() {
  return (
    <>
      <Team />
      <Clients />
    </>
  )
}
