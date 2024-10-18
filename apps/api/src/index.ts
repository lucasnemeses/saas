import { defineAbilityFor } from "@saas/auth"

const ability = defineAbilityFor({ role: 'admin' })

const userCanInviteSomeoneElse = ability.can('invite', 'User')
const userCanDeleteOtherUsers = ability.can('delete', 'User')

console.log(userCanInviteSomeoneElse)
console.log(userCanDeleteOtherUsers)
