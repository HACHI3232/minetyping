class DictionariesController < ApplicationController
  def index
    @dictionaries = Dictionary.all
    @dictionary = Dictionary.new
  end

  def new
    @dictionary = Dictionary.new

  end

  def create
    @dictionary = Dictionary.new(dictionary_params)
    if @dictionary.save
      redirect_to dictionaries_path
    else
      render :new
    end
  end

  def edit
    @dictionary = Dictionary.find(params[:dictionary_id])
    @word = @dictionary.words.find(params[:id])
  end

  def destroy
    @dictionary = Dictionary.find(params[:id])
    @dictionary.destroy
    redirect_to dictionaries_path
  end


  def show
    @dictionary = Dictionary.find(params[:id])
    @word = Word.new
    @words = @dictionary.words
    end

  private

  def dictionary_params
    params.require(:dictionary).permit(:name)
  end
end
