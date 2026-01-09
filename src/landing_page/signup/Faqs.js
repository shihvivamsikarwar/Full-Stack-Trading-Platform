import React from "react";
function Faqs() {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <h1 className="mt-5 fs-2">FAQs</h1>
        <h2 className="mt-5 fs-4">What is a Zerodha account?</h2>
        <p className="text-muted">
          A Zerodha account is a combined demat and trading account that allows
          investors to buy, sell, and hold securities digitally.
        </p>
        <h2 className="mt-3 fs-4">
          What documents are required to open a demat account?{" "}
        </h2>
        <p className="text-muted">
          The following documents are required to open a Zerodha account online:
          <ul>
            <li>PAN number</li>
            <li>
              Aadhaar Card (Linked with a phone number for OTP verification)
            </li>
            <li>
              Cancelled cheque or bank account statement (To link your bank
              account)
            </li>
            <li>
              {" "}
              Income proof (Required only if you wish to trade in Futures &
              options)
            </li>
          </ul>
        </p>
        <h2 className="mt-3 fs-4">Is Zerodha account opening free?</h2>
        <p className="text-muted">Yes, It is completely free.</p>
        <h2 className="mt-3 fs-4">
          Are there any maintenance charges for a demat account?
        </h2>
        <p className="text-muted">
          The account maintenance charges is applicable based on the account
          type.
          <br />
          For Basic Services Demat Account: Zero charges if the holding value is
          less than ₹4,00,000. <br />
          For non-Basic Services Demat Account demat accounts: ₹300 per year +
          GST.
          <br />
          To learn more about BSDA, Click here.
        </p>
        <h2 className="mt-3 fs-4">
          Can I open a demat account without a bank account?
        </h2>
        <p className="text-muted">
          To open a demat account, you must have a bank account in your name.
          <br />
          If UPI verification is completed successfully, no proof of bank is
          needed. However, if bank verification fails, you'll need to provide
          either a cancelled
          <br /> cheque or a bank statement to link your bank account to
          Zerodha.
        </p>
      </div>
    </div>
  );
}
export default Faqs;
