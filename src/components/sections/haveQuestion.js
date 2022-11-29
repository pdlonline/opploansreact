import React from 'react'
import AccordionItem from '../card/accordionItem'

const mockData = [
  {
    id: 1,
    title: `Annual Percentage Rate (APR)`,
    content: `
    Here at Opportunity-loan we offer APR rates ranging from 4.95% minimum to 35.95% maximum. The APR you may be offered depends on different factors, including your personal situation and financial standing. By completing our loan offer form you shall receive details of the APR and full terms of any loan offered to you.`
  },
  {
    id: 2,
    title: `Loan Term (Repayment Period)`,
    content: `table`
  },
  {
    id: 3,
    title: `Representative Example of APR`,
    content: `
    If you borrow $2,500 over a term of 1 year with an APR of 10% and a fee of 3%, you will pay $219,79 each month.
    The total amount payable will be $2,637, with a total interest of $137,48.
  `
  },
  {
    id: 4,
    title: `Financial Implications (Interest & Finance Charges)`,
    content: `
    Opportunity-loan is not a lender and we cannot predict what fees and interest rate will be applied to the loan you will
    be offered. It is your lender that will provide all the necessary information about the cost of the loan.
    It is your responsibility to peruse the loan agreement carefully and accept the offer only if you agree to all the terms.
    Opportunity-loan service is free of charge, and you are under no
obligation to accept the terms that the lender offers you.
  `
  },
  {
    id: 5,
    title: `Implications of Non-Payment`,
    content: `When you accept the terms and conditions for a loan, you enter into a commitment to repay the amount you owe according to the specific schedule outlined in the documents. In the event of non-payment, additional charges may be applied. Late payment penalties vary by lender, and as Opportunity-loan is not involved in the lending process, we cannot supply any information on the fees you will incur if any default occurs. For more information, please contact the lender directly if you have any issues relating to your loan repayment.`
  },
  {
    id: 6,
    title: `Potential Impact on Credit Score`,
    content: `
    Opportunity-loan is not a lender and we do not check your credit standing and credit capacity.
    When you submit a request at our online platform, this is considered a soft inquiry and does not impact your credit score.
    However, some lenders may carry out a credit check to ascertain your eligibility for a loan.
    Most likely they will turn to any of the three major credit bureaus (Transunion, Experian, and Equifax) that is in most cases considered a hard inquiry and may affect your credit score.
  `
  },
  {
    id: 7,
    title: `Collection Practices`,
    content: `
    Opportunity-loan is not a lender.
    As such, we are not involved in any debt collection practices and cannot make you aware of any of them.
    Your lender will specify their collection practices in your loan
agreement.
    If you have any questions regarding the issue, please, address them to your lender.
    For more information visit our page for Responsible Lending. opportunity-loan.com itself isn’t involved in debt collection.
  `
  },
  {
    id: 8,
    title: `Loan Renewal Policies`,
    content: `
    Loan renewal options are not always available.
    It is therefore advisable to clarify whether the option is available with your lender.
    Be sure to carefully peruse the renewal policy presented in the agreement before you sign the documents.
`
  },
]
const HaveQuestionSection = () => {
  return (
    <div className='myContainer'>
      <div className='text-4xl font-black text-center relative '>
        <div className='relative w-fit  mx-auto'>
          <div className='w-[190px] absolute h-1 bg-[#01b6fa] top-4 left-[-220px]' />
          Have a questions
          <div className='w-[190px] absolute h-1 bg-[#01b6fa] top-4 right-[-220px]' />
        </div>

      </div>
      <div>
        {mockData.map((item, key) => (
          <div key={key}>
            <AccordionItem
              id={item.id}
              title={item.title}
              content={item.content}
            />
          </div>
        ))}
      </div>
    </div >
  )
}

export default HaveQuestionSection