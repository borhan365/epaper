import Link from 'next/link'
import React from 'react'

function PaginationSection() {
  return (
    <>
      <div className="container">
        <div className="pagination-wrapper">

          {/* left */}
          <div className="pagination-left">
            <div className="pagi-wrap">
              <Link href="">{"<"}</Link>
              <Link href="">শুরু</Link>
            </div>

            {/* pages */}
            <div className="pagi-pages">
              <Link className='active' href="#">০১</Link>
              <Link href="#">০২</Link>
              <Link href="#">০৩</Link>
              <Link href="#">০৪</Link>
              <Link href="#">০৫</Link>
              <Link href="#">০৬</Link>
              <Link href="#">০৭</Link>
              <Link href="#">০৮</Link>
            </div>
          </div>

          {/* right */}
          <div className="pagination-right">
            <div className="pagi-wrap">
              <Link href="">শেষ</Link>
              <Link href="">{">"}</Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default PaginationSection