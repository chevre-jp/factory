const factory = require('../lib/index');

let error = factory.errors.ServiceUnavailable('message');
console.log('ServiceUnavailable?', error instanceof factory.errors.ServiceUnavailable);
console.log('GatewayTimeout?', error instanceof factory.errors.GatewayTimeout);

error = factory.errors.GatewayTimeout('message');
console.log('ServiceUnavailable?', error instanceof factory.errors.ServiceUnavailable);
console.log('GatewayTimeout?', error instanceof factory.errors.GatewayTimeout);