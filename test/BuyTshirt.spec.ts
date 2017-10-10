import { browser } from 'protractor';
import {
  MenuContentPage, ProductListPage, ProductDetailPage,
  ProductAddedModalPage, SummaryStepPage, SignInStepPage, AddressStepPage,
  ShippingStepPage, PaymentStepPage, BankPaymentPage, OrderResumePage
} from '../src/page';

describe('Given the automation practice page', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productDetailPage: ProductDetailPage = new ProductDetailPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderResumePage: OrderResumePage = new OrderResumePage();

  beforeEach(async () => {
    await browser.get('http://automationpractice.com/');
  });

  describe('When I decide to buy a T-shirt', () => {
    beforeEach(async () => {
      await menuContentPage.goToTShirtMenu();
      await productListPage.goToProductItemDetails();
      await productDetailPage.addToCart();
      await productAddedModalPage.proceedToCheckout();
      await summaryStepPage.proceedToCheckout();
    });

    describe('And I sign-in in the page', () => {
      const username = 'aperdomobo@gmail.com';
      const password = 'WorkshopProtractor';

      beforeEach(async () => {
        await signInStepPage.signIn(username, password);
      });

      describe('And I choose a delivering address', () => {
        beforeEach(async () => {
          await addressStepPage.proceedToCheckout();
        });

        describe('And I proceed to Pay', () => {
          beforeEach(async () => {
            await shippingStepPage.proceedToCheckout();
            await paymentStepPage.payByBank();
            await bankPaymentPage.confirmOrder();
          });

          it('Then It should confirm my order is complete', async () => {
            await expect(orderResumePage.getCompleteMessage())
              .toBe('Your order on My Store is complete.');
          });
        });
      });
    });
  });
});
