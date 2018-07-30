export const Schema = [`
	# Declare custom scalars
	scalar Date

	# A group chat entity
	type Group {
		id: Int!
		name: String
		users: [User]!
		messages: [Message]
	}

	# A user -- keeping the user really simple for now
    type User {
		id: Int!
		email: String!
		username: String
		messages: [Message]
		groups: [Group]
		friends: [User]
	}

	# a message sent from a user to a group
	type Message {
		id: Int! 
		to: Group! 
		from: User! 
		text: String! 
		createdAt: Date! 
	}
	
	# query for types
	type Query {
		# Return a user by their email or id
		user(email: String, id: Int): User
		
		# Return messages sent by a user via userId
		# Return messages sent to a group via groupId
		messages(groupId: Int, userId: Int): [Message]
		
		# Return a group by its id
		group(id: Int!): Group
	}
	
	schema {
		query: Query
	}
`];
