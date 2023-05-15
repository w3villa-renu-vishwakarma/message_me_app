class SessionsController < ApplicationController
    before_action :logged_in_redirect, only: [:new, :create]
    def new
    end

    def create
        user = User.find_by(username: params[:session][:username].downcase)
        if user && user.authenticate(params[:session][:password])
            session[:user_id] = user.id
            flash[:success] = "you login successfully"
            redirect_to root_path
        else
            flash.now[:error] = "something wrong"
            render 'new'
        end
    end

    def destroy
        session[:user_id] = nil
        flash.now[:success] = "you logout successfully"

    end

 private
   def logged_in_redirect
      if logged_in?
         flash[:error] = "You logged in already"
         redirect_to root_path
      end
   end
end
