import Section from "../components/Section";
export const metadata={
    title:"Refund Policy"
  }
export default function RefundPolicy() {
  return (
    <Section>
      <div className="flex flex-col gap-4">
        <h1>Returns &amp; Refunds policy:</h1>
        <p>
          You are entitled to cancel your order within 30 days without giving
          any reason for doing so.
        </p>
        <p>
          The deadline for canceling an order is 30 days from the date you
          received the goods or on which a third party you have appointed, who
          is not the carrier, takes possession of the product delivered.
        </p>
        <p>
          In order to exercise your right of cancellation, you must inform us of
          your decision by means of a clear statement.
        </p>
        <p>You can inform us of your decision by e-mail info@wppress.net</p>
        <p>
          We will reimburse you no later than 30 days from the day on which we
          receive the returned goods. We will use the same means of payment as
          you used for the order, and you will not incur any fees for such
          reimbursement.
        </p>
        <h4>Conditions for returns:</h4>
        <p>
          In order for the goods to be eligible for a return, please make sure
          that:
        </p>
        <ul>
          <li>The goods were purchased in the last 30 days</li>
          <li>The goods are in the original packaging</li>
        </ul>
        <p>The following goods cannot be returned:</p>
        <ul>
          <li>
            The supply of goods made to your specifications or clearly
            personalized.
          </li>
          <li>
            The supply of goods which according to their nature are not suitable
            to be returned, for example goods which deteriorate rapidly or where
            the date of expiry is over.
          </li>
          <li>
            The supply of goods which are not suitable for return due to health
            protection or hygiene reasons and were unsealed after delivery.
          </li>
          <li>
            The supply of goods which are, after delivery, according to their
            nature, inseparably mixed with other items.
          </li>
        </ul>
        <p>
          We reserve the right to refuse returns of any merchandise that does
          not meet the above return conditions at our sole discretion.
        </p>
        <h4>Returning Goods</h4>
        <p>
          You are responsible for the cost and risk of returning the goods to
          us. You should send the goods to the following address:
        </p>
        <p>info@wppress.net</p>
        <p>
          We cannot be held responsible for goods damaged or lost in return
          shipment. Therefore, we recommend an insured and trackable mail
          service. We are unable to issue a refund without actual receipt of the
          goods or proof of received return delivery.
        </p>
        <h4>Gifts:</h4>
        <p>
          If the goods were marked as a gift when purchased and then shipped
          directly to you, you’ll receive a gift credit for the value of your
          return. Once the returned product is received, a gift certificate will
          be mailed to you.
        </p>
        <p>
          If the goods weren’t marked as a gift when purchased, or the gift
          giver had the order shipped to themselves to give it to you later, We
          will send the refund to the gift giver.
        </p>
        <h4>Contact Us</h4>
        <p>
          If you have any questions about our Returns and Refunds Policy, please
          contact us by e-mail info@wppress.net
        </p>
      </div>
    </Section>
  );
}
