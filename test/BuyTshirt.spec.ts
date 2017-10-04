import { browser } from 'protractor';
import { MenuContentPage, ProductListPage, ProductDetailPage, 
  ProductAddedModalPage, SummaryStepPage, SignInStepPage, AddressStepPage,
  ShippingStepPage, PaymentStepPage, BankPaymentPage, OrderResumePage} from '../src/page';

describe('Buy a t-shirt', () => {
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

 beforeEach(() => {
   jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
 });

 it('then should be bought a t-shirt', async () => {
   await browser.get('http://automationpractice.com/');
   await(browser.sleep(10000));
   await menuContentPage.goToTShirtMenu();
   await(browser.sleep(3000));
   await productListPage.goToProductItemDetails();
   await(browser.sleep(3000));
   await productDetailPage.addToCart();
   await(browser.sleep(3000));
   await productAddedModalPage.proceedToCheckout();
   await(browser.sleep(3000));
   await summaryStepPage.proceedToCheckout();
   await(browser.sleep(3000));
   await signInStepPage.signIn('aperdomobo@gmail.com', 'WorkshopProtractor');
   await(browser.sleep(3000));
   await addressStepPage.proceedToCheckout();
   await(browser.sleep(3000));

   await shippingStepPage.agreedTerms();
   await(browser.sleep(3000));

   await shippingStepPage.proceedToCheckout();
   await(browser.sleep(3000));
   await paymentStepPage.payByBank();
   await(browser.sleep(3000));
   await bankPaymentPage.confirmOrder();
   await(browser.sleep(3000));

   await expect(orderResumePage.getCompleteMessage())
     .toBe('Your order on My Store is complete.');
 });
});
