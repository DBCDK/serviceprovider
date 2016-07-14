
export function validateDeleteOrder(params) {
  if (!params.orderId) {
    throw ('Needs orderId to delete order');
  }

  if (typeof params.orderId !== 'string') {
    throw ('orderId must be a string');
  }
}

export function validateOrder(params){
  if (!params.pids || params.pids.length < 1) {
    throw ('At least one pid must be provided to place order');
  }
  if (!params.library) {
    throw ('library must be provided (used for pickup)');
  }
}
