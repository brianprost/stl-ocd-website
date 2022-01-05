import Navbar from '../Navbar'
import { Books } from '../../data/Books'

export default () => {
    return (
        <>
            <Navbar />
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full border text-center">
                                <thead class="border-b">
                                    <tr>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                                            Title
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                                            Author
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                                            ISBN
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Books.map((book) => (
                                        <tr class="border-b">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                                                {book.title}
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                                {book.author}
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                                {book.isbn}
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
