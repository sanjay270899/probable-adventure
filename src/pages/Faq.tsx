import cx from 'classnames'
import React from 'react'

import Layout from '@components/Layout/Layout'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: 'How do I apply for this mentorship?',
    answer:
      ' Click on the Join Us button at devsnest.in or you can alternatively click on this link and follow the guidelines provided in the Welcome Note channel. '
  },
  {
    question: 'What is the duration of the mentorship?',
    answer:
      'The ideal duration of the mentorship is 6 months, Some students will be able to get a job sooner and some might need some more revision classes'
  },
  {
    question: 'What is the fees for this mentorship?',
    answer:
      'The mentorship costs Rs.16000 + GST. Currently, we are running an early bird discount of 50% for the first 30 students that enroll in the course. Afterwards, we would also be running a 25% discount to the next 270 students.'
  },
  {
    question: 'Who are the mentors?',
    answer:
      'Mentors are Developers from top tech companies like Google, Facebook, Amazon who will be helping students in the community.'
  },
  {
    question: 'What are the prerequisites to join this mentorship?',
    answer:
      'Students applying should have a basic understanding of English and Mathematics, and they should go through a week long python primer to check if coding is for them.\n\nMost importantly what we need from students is their motivation to learn.\n    '
  },
  {
    question: 'Does Devsnest guarantee me a job?',
    answer:
      'No, Although we focus on teaching on demand industry skills and making you noticeable by recruiters by getting you referrals and showcasing your project on our website but clearing interviews is the sole responsibility of students. Our product is majorly focused towards upskilling our students, not guaranteeing them a job.'
  },
  {
    question: 'I am not currently looking for a job, is the mentorship for me?',
    answer:
      'Devsnest also provides students with various internships and freelancing opportunities.\nMultiple mentors in the community will guide students to start collaborating on open source projects after the course.\n    '
  },
  {
    question: 'What is the effort required from a student?',
    answer:
      'Effort required is close to min 4-5 hours in a day in which you have to attend classes, do sessions with peers and do tasks and assignments. Peer learning and collaboration are one of the core values of Devsnest.\n    '
  },
  {
    question: 'The class hours don’t work for me, what do i do?',
    answer:
      'We will record all the classes, but group meetings are mandatory for each student. You have to make sure that you can attend other mandatory meetings and do the assignments on time.'
  },
  {
    question:
      'Does any school, college or cohort matter to be a part of this mentorship?',
    answer:
      'There are no boundations in terms of the degree you are pursuing. This is open for everyone who is curious and willing to put in the required effort.'
  },
  {
    question: 'Does the mentorship involve interview preparation as well?',
    answer:
      'Yes, In our last month we would be focusing on improving your resume and cover letter as well as getting you mock interviews and help you become job ready.'
  },
  {
    question:
      'I work full time but I would like to join the mentorship, what are the options?',
    answer:
      'You are free to join the mentorship even if you are employed full time. We will provide you with the recorded lectures but it will be mandatory for you to complete the given assignments and actively participate in group meetings.'
  },
  {
    question: 'Do you provide the mentorship on EMIs?',
    answer:
      'Currently, we do not process EMIs as a mode of payment for the mentorship.'
  },
  {
    question: 'What happens after the mentorship is over?',
    answer: 'You retain lifetime exclusive membership of the community.'
  },
  {
    question: "Will I get a refund if I don't like the mentorship?",
    answer: ' Checkout our Refund Policy at devsnest.in/refund-policy . '
  },
  {
    question: 'Whom to contact in case of any doubt related to the mentorship?',
    answer:
      ' You can email us at support@devsnest.in or you can contact a moderator on discord. Also, there is a channel called course-doubts on our Discord server, you can put in your query there. '
  }
]

const Faq = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-white">
              Frequently asked questions
            </h2>

            <p className="mt-4 text-lg text-gray-400">
              Can’t find the answer you’re looking for? Reach out to us at{' '}
              <a
                href="mailto:support@devsnest.in"
                className="font-medium text-indigo-500 hover:text-indigo-400">
                support@devsnest.in
              </a>
            </p>
          </div>

          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="">
              {faqs.map((faq) => (
                <Disclosure
                  as="div"
                  key={faq.question}
                  className="pb-4 mb-4 border-b border-gray-700">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none">
                          <span className="font-medium text-gray-100">
                            {faq.question}
                          </span>
                          <span className="ml-6 h-7 flex items-center">
                            <ChevronDownIcon
                              className={cx(
                                open ? '-rotate-180' : 'rotate-0',
                                'h-6 w-6 transform'
                              )}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>

                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base text-gray-400">{faq.answer}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Faq
