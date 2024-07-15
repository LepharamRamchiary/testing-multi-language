import React from 'react'
import { useTranslation } from 'react-i18next'

function Home() {
    const { t } = useTranslation();
    return (
        <div className='mt-40 md:mt-28 flex h-full w-full '>
            <div className='md:flex md:flex-row flex flex-col sm:flex sm:flex-row justify-center items-center max-w-2xl mx-auto gap-3 md:p-8 sm:p-9 p-6'>
                <div className='md:flex md:flex-row gap-2 flex flex-col'>
                    <div className="block md:w-[500px] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{t('card1.title')}</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">{t('card1.description')}</p>
                    </div>
                    <div className="block md:w-[500px] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{t('card2.title')}</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">{t('card2.description')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home