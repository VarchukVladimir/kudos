kudos = new Mongo.Collection('kudos');
users = new Mongo.Collection('users');


if (Meteor.isClient) {
    Template.registerHelper('formatDate', function(date) {
        return (new Date(date).format('yyyy-MM-dd'));
    });

    Template.mediaItems.helpers({
        "media_obj":function(){
        return kudos.find();
        }
    });
    Template.kudosItem.helpers({
        "users":function(){
            var user_from = users.findOne({"_id":this.from});
            var user_to = users.findOne({"_id":this.to});
            return {"user_from":user_from, "user_to":user_to};
        }
    });


}

if (Meteor.isServer) {
    // server code goes here

}
