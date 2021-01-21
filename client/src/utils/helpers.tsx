import { Product, Participant } from '../generated/graphql';

/**
 * Returns the number of vendors supplying nibbles
 * @param {Array<Object>} Product
 * @return number
*/
export const getUniqueVendors = (products: Product[]): number => {
  const allVendors = products.map((item) => item.vendor);
  return allVendors ? new Set(allVendors).size : 0;
};

/**
 * Returns the total weight of current inventory
 * @param {Array<Object>} Product
 * @return number
*/
export const getInventoryWeight = (products: Product[]): number => {
  return products.reduce((a: number, b: Product) => {
    return a + b.variants[0].grams;
  }, 0);
};

/**
 * Returns the dollar value of current inventory
 * @param {Array<Object>} Product
 * @return number
*/
export const getInventoryValue = (products: Product[]): number => {
  return products.reduce((a: number, b: Product) => {
    return a + Number(b.variants[0].price);
  }, 0);
};

/**
 * Returns the number companies represented at event
 * @param {Array<Object>} Participant
 * @return number
*/
export const getCompaniesRepresented = (
  participants: Participant[],
): number => {
  const allCompanies = participants.map((item) => item.company);
  return allCompanies ? new Set(allCompanies).size : 0;
};

/**
 * Returns the total balances of buying participants
 * @param {Array<Object>} Participant
 * @return number
*/
export const getTotalBalances = (participants: Participant[]): number => {
  const total = participants.reduce((a: number, b: Participant) => {
    return a + parseBalance(b.balance);
  }, 0);
  return Math.round(total);
};

/**
 * Returns the top 3 balance holders at the event
 * @param {Array<Object>} Participant
 * @return number
*/
export const getTopBalanceHolders = (participants: Participant[]): string[] => {
  const sorted = participants.sort(
    (a, b) => parseBalance(b.balance) - parseBalance(a.balance),
  );

  return sorted ? [sorted[0]?.name, sorted[1]?.name, sorted[2]?.name] : []
};

/**
 * Return number formatted as currency
 * @param string 
 * @return number
*/
const parseBalance = (balance: string): number => {
  const parsedNum = Number(balance.replace(/[^0-9.-]+/g, ''));
  return parsedNum;
};
