class WordsController < ApplicationController
  def create
    @dictionary = Dictionary.find(params[:dictionary_id])
    @word = @dictionary.words.build(word_params)
    if @word.save
      redirect_to dictionary_path(@dictionary)
    else
      @words = @dictionary.words
      render "dictionaries/show"
    end
  end

  def edit
    @word = Word.find(params[:id])
  end

  def update
    
  end

  def destroy
    @word = Word.find(params[:id])
    @word.destroy
    redirect_to  dictionaries_path
  end

  private

  def word_params
    params.require(:word).permit(:word, :mean)
  end
end
