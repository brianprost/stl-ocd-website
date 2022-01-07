import Navbar from '../Navbar'
import { Books } from '../../data/Books'

export default () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="flex justify-center items-center py-2 min-w-full sm:px-6 lg:px-8">
                        <h1 className="text-center text-4xl font-title text-blue-700">Books</h1>
                        <div className="container overflow-hidden">
                            <table className="min-w-full border text-center mt-40">
                                <thead className="border-b bg-neutral-500 ">
                                    <tr>
                                        <th scope="col" className="text-sm font-bold text-neutral-50 px-6 py-4 border-r">
                                            Title
                                        </th>
                                        <th scope="col" className="text-sm font-bold text-neutral-50 px-6 py-4 border-r">
                                            Author
                                        </th>
                                        <th scope="col" className="text-sm font-bold text-neutral-50 px-6 py-4 border-r">
                                            ISBN
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Books.map((book) => (
                                        <tr className="border-b">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                                                {book.Title}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                                {book.Authors}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                                {book['ISBN-13']}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
