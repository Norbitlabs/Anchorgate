#![no_std]
use soroban_sdk::{contract, contractimpl, symbol_short, Symbol, Env};

#[contract]
pub struct AnchorgateContract;

#[contractimpl]
impl AnchorgateContract {
    pub fn hello(_env: Env, _to: Symbol) -> Symbol {
        symbol_short!("Hello")
    }
}

#[cfg(test)]
mod test {
    use super::*;
    use soroban_sdk::{symbol_short, Env};

    #[test]
    fn test() {
        let env = Env::default();
        let contract_id = env.register_contract(None, AnchorgateContract);
        let client = AnchorgateContractClient::new(&env, &contract_id);

        let words = client.hello(&symbol_short!("Dev"));
        assert_eq!(words, symbol_short!("Hello"));
    }
}
