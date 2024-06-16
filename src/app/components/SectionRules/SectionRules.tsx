'use client'
import styles from './styles/index.module.css';
// import img from '../../../../public/images/rulesCompanyGallary1.jpg';
// import ReactPaginate from 'react-paginate';
// import { Children, useState } from 'react';
// // import { PaginationCustom } from '../PaginationCustom/PaginationCustom';

// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// interface ItemsProps {
//   currentItems: cardProps[];
//   cardImg: string[];
//   cardTitle: string[]
// }

// function Items({ currentItems }: ItemsProps) {
//   return (
//     <ul className={styles.requestList}>
//       {requests.map((item) => {
//         return (
//           <li key={item.id} className={styles.requestList__item}>
//             <UserRequestCard requestData={item} />
//           </li>
//         );
//       })}
//     </ul>
//   );
// }

// interface PaginatedItemsProps {
//   itemsPerPage: number;
// }

// function PaginatedItems({ itemsPerPage }: PaginatedItemsProps) {
//   // Here we use item offsets; we could also use page offsets
//   // following the API or data you're working with.
//   const [itemOffset, setItemOffset] = useState(0);

//   // Simulate fetching items from another resources.
//   // (This could be items from props; or items loaded in a local state
//   // from an API endpoint with useEffect and useState)
//   const endOffset = itemOffset + itemsPerPage;
//   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
//   const currentItems = items.slice(itemOffset, endOffset);
//   const pageCount = Math.ceil(items.length / itemsPerPage);

//   // Invoke when user click to request another page.
//   const handlePageClick = (event: { selected: number }) => {
//     const newOffset = (event.selected * itemsPerPage) % items.length;
//     console.log(
//       `User requested page number ${event.selected}, which is offset ${newOffset}`
//     );
//     setItemOffset(newOffset);
//   };

//   return (
//     <>
//       {Children}
//       <ReactPaginate
//         breakLabel="..."
//         nextLabel="next >"
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={5}
//         pageCount={pageCount}
//         previousLabel="< previous"
//         renderOnZeroPageCount={null}
//       />
//     </>
//   );
// }

export function SectionRules() {
  return (
    <section className={styles.sectionRules}>
      <h2>Правила &laquo;строй хауз&raquo;</h2>
      <article>
        {/* <Image src={img} alt="Правила" className={styles.rulesImg} /> */}
        <h4>Беспрецедентное качество</h4>
        <p>Мы не никогда и нигде не экономим и не оптимизируем. Это основа нашей работы. Мы не зарабатываем на материалах. К нашей работе не докопаться, У нас независимый технадзор, клиент может ещё один нанимать если ему так спокойнее. Без недостатков без ошибок — безупречно</p>
      </article>
      {/* <PaginatedItems itemsPerPage={1} /> */}
      {/* <PaginationCustom  /> */}

    </section>
  );
}