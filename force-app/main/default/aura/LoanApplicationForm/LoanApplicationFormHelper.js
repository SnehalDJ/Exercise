({
	createLoan : function(component, loan) {
        var theLoans = component.get("c.saveLoan");
        action.setParams({
                "loan": loan
        });

        action.setCallback(this, function(response){
                var state = response.getState();
                console.log("Create loan: " + JSON.stringify(state));
                if(state === "SUCCESS") {
                        var loans = component.get("v.loans");
                        loans.push(response.getReturnValue());
                        component.set("v.loans", loans);
                        console.log("loan created in helper")
                }

        });
        $A.enqueueAction(action);
        
	}
})